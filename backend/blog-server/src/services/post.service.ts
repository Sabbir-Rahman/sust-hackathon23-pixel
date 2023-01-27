import { logServiceError } from '../../logger/customLogger'
import { Post, PostDoc } from '../interfaces/blog'
import PostModel from '../models/post'
import UserModel from '../models/user'
import ModelError from '../utils/ModelError'

const FILENAME = 'blog-server/src/services/post.service.ts'
async function createPost(data: Post): Promise<PostDoc | ModelError> {
  try {
    const post = await PostModel.create(data)
    return post
  } catch (error) {
    logServiceError('createPost', FILENAME, String(error))
    return new ModelError(error)
  }
}

async function findMapDataWithLocation(
  centerCoordinate: number[],
  radius: number
): Promise<PostDoc[] | ModelError> {
  try {
    const postData = await PostModel.find({
      location: {
        $geoWithin: {
          $centerSphere: [centerCoordinate, radius / 3963.2],
        },
      },
    })
    return postData
  } catch (error) {
    logServiceError('findMapDataWithLocation', FILENAME, String(error))
    return new ModelError(error)
  }
}

async function findGlobalData(
  query: Record<string, unknown>
): Promise<PostDoc[] | ModelError> {
  try {
    const postData = await PostModel.find(query)
    return postData
  } catch (error) {
    logServiceError('findGlobalData', FILENAME, String(error))
    return new ModelError(error)
  }
}

async function searchPostWithTextDescryption(
  descryption: string
): Promise<PostDoc[] | ModelError> {
  try {
    const postData = await PostModel.find({descryption: /descryption/})
    return postData
  } catch (error) {
    logServiceError(
      'searchPostWithTextDescryption',
      FILENAME,
      String(error)
    )
    return new ModelError(error)
  }
}

const upvoteUser = async (userId: string) => {
  try {
    const upvote = await UserModel.updateOne(
      {
        _id: userId,
      },
      { $inc: { totalUpvoteCount: 1 } }
    ).orFail()

    return upvote
  } catch (error) {
    logServiceError('upvoteUser', FILENAME, String(error))
    return new ModelError(error)
  }
}

const upvote = async (id: string) => {
  try {
    const userFoodPackage = await PostModel.updateOne(
      {
        _id: id,
      },
      { $inc: { 'reactions.upvote': 1 } }
    ).orFail()

    return userFoodPackage
  } catch (error) {
    logServiceError('decreaseFoodCount', FILENAME, String(error))
    return new ModelError(error)
  }
}

export default {
  createPost,
  findMapDataWithLocation,
  findGlobalData,
  searchPostWithTextDescryption,
  upvote,
  upvoteUser
}
