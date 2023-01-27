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

export default { createUser }