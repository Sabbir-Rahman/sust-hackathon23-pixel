import { Response, Request } from 'express'
import userService from '../services/user.service'
import { bcryptUtils, randomTextUtils } from '../utils'
import { AddUserInput } from '../validators/user'
import { User } from '../interfaces/modelInterfaces/user.interface'
import ModelError from '../utils/ModelError'
async function createUser(
  req: Request<never, never, AddUserInput['body']>,
  res: Response
): Promise<void> {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'User not created',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }
  let isDuplicateUser = true
  
  
  let username = req.body.nickName.toLowerCase()
  let isUserExist = await userService.findUserByUserName(username)
  while (isUserExist) {
    username = await randomTextUtils.generateRandomString(username,3)
    isUserExist = await userService.findUserByUserName(username)
  }
  
  const isDuplicateEmail = await userService.findUserByEmail(req.body.email)
  const userHashPass = await bcryptUtils.hashPassword(req.body.password)
  

  if (isDuplicateEmail) {
    response.message = 'Email already exist'
  } else {
    
    const userObj: User = {
      ...req.body,
      password: userHashPass,
      username,
      role: ['user'],
    }
    const user = await userService.createUser(userObj)
    
    if (user instanceof ModelError) {
      response.developerMessage = user.error
    }else {
      response.isSuccess = true
      response.message = 'User created succesfully'
      response.statusCode = 200
      response.data = user
    }
  }

  res.status(response.statusCode).json(response)
}

export default { createUser }