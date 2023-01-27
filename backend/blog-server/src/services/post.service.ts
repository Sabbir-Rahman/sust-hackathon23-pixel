import { logServiceError } from '../../logger/customLogger';
import { Post, PostDoc } from '../interfaces/blog';
import PostModel from '../models/post';
import ModelError from '../utils/ModelError';

const FILENAME = 'blog-server/src/services/post.service.ts'
async function createPost(data:Post):Promise<PostDoc|ModelError> {
  try {
    const post = await PostModel.create(data)
    return post
  } catch (error) {
    logServiceError('createPost',FILENAME,String(error))
    return new ModelError(error)
  }
}

export default {
  createPost
}