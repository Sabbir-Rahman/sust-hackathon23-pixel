import { logServiceError } from '../../logger/customLogger';
import { UserDoc, User } from '../interfaces/modelInterfaces/user.interface';
import UserModel from '../models/user';
import ModelError from '../utils/ModelError';

const FILENAME = 'admin-server/src/services/user.service.ts'
async function createUser(data:User):Promise<UserDoc|ModelError> {
  try {
    const user = await UserModel.create(data)
    return user
  } catch (error) {
    logServiceError('createUser',FILENAME, String(error))
    return new ModelError(error)
  }
}

async function findUserByUserId(userId: string): Promise<UserDoc | ModelError> {
  try {
    const user = await UserModel.findById(userId).orFail()
    return user
  } catch (error) {
    logServiceError('findUserByUserId', FILENAME, String(error))
    return new ModelError(error)
  }
}

async function findUserByUserName(username: string): Promise<UserDoc | ModelError> {
  try {
    const user = await UserModel.findOne({ username }).orFail()
    return user
  } catch (error) {
    logServiceError('findUserByUserId', FILENAME, String(error))
    return new ModelError(error)
  }
}

async function findUserByEmail(email: string): Promise<UserDoc | ModelError> {
  try {
    const user = await UserModel.findOne({ email }).orFail()
    return user
  } catch (error) {
    logServiceError('findUserByEmail', FILENAME, String(error))
    return new ModelError(error)
  }
}

export default { createUser, findUserByUserId, findUserByUserName, findUserByEmail }