import { Request, Response } from 'express'
import { Post } from '../interfaces/blog'
import { postService } from '../services'
import ModelError from '../utils/ModelError'
import { AddProblemInput } from '../validators/post'

const createPost = async (req: Request<never, never, AddProblemInput['body']>, res: Response): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Create post not successfull',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const { title, descryption, images, postType,problemTag, lat,long} = req.body
  const postObj: Post = {
    title,
    descryption,
    images,
    location: {
      type: "Point",
      coordinates: [lat,long],
    },
    postType,
    problemTag
  }
  const post = await postService.createPost(postObj)

  if (post instanceof ModelError) {
    response.developerMessage = post.error
  } else {
    response.isSuccess = true
    response.message = 'Post created succesfully'
    response.statusCode = 200
    response.data = post
  }
  
}



export default { createPost }