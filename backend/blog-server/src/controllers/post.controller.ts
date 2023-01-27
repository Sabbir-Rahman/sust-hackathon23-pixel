import { Request, Response } from 'express'
import fs from 'fs'
import util from 'util'
import { s3Bucket } from '../utils'
import { Post } from '../interfaces/blog'
import { postService } from '../services'
import ModelError from '../utils/ModelError'
import { AddProblemInput, viewPostDataWithinRadiusSchemaInput } from '../validators/post'
import { Key } from '../interfaces/type'

const unlinkFile = util.promisify(fs.unlink)

const createPost = async (
  req: Request<never, never, AddProblemInput['body']>,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Create post not successfull',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const { title, descryption, images, postType, problemTag, coordinates } =
    req.body
  const postObj: Post = {
    userId: res.locals.user.userId,
    nickName: res.locals.user.nickName,
    isAnonymous: res.locals.user.isAnonymous,
    title,
    descryption,
    images,
    location: {
      type: 'Point',
      coordinates,
    },
    postType,
    problemTag,
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

  res.status(response.statusCode).json(response)
}

const viewPostWithinaRadius = async (
  req: Request<never, never, viewPostDataWithinRadiusSchemaInput['body']>,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'View post with radius not successfull',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const post = await postService.findMapDataWithLocation(req.body.centerCoordinate,req.body.radius)

  if (post instanceof ModelError) {
    response.developerMessage = post.error
  } else {
    response.isSuccess = true
    response.message = 'View post with radius succesfully'
    response.statusCode = 200
    response.data = post
  }

  res.status(response.statusCode).json(response)
}

const viewGlobalPostData = async (
  req: Request<never, never, never>,
  res: Response
): Promise<void> => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'View global post not successfull',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const post = await postService.findGlobalData(req.query)

  if (post instanceof ModelError) {
    response.developerMessage = post.error
  } else {
    response.isSuccess = true
    response.message = 'View global post succesful'
    response.statusCode = 200
    response.data = post
  }

  res.status(response.statusCode).json(response)
}

const uploadPostImages = async (
  req: Request<never, never, never>,
  res: Response
) => {
  const response = {
    isSuccess: false,
    statusCode: 400,
    message: 'Upload images not succesfull',
    developerMessage: '',
    isReadOnly: false,
    data: {},
  }

  const { title } = req.params
  const filesInfo: any = req.files
  const filesKey = []

  for (let i = 0; i < filesInfo.length; i++) {
    const result = await s3Bucket.uploadFile(filesInfo[i])
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await unlinkFile(filesInfo[i].path)
    if (result) {
      filesKey.push(result.Key)
    }
  }

  if (filesKey.length > 0) {
    response.data = filesKey
    response.statusCode = 200
    response.isSuccess = true
    response.message = 'Image upload successfull'
  }

  res.status(response.statusCode).json(response)
}

const viewImage = async (
  req: Request<Key, never, never>,
  res: Response
): Promise<any> => {
  const { key } = req.params

  const readstram = s3Bucket.getFileStream(key)

  readstram.pipe(res)
}

export default { createPost, viewPostWithinaRadius, viewGlobalPostData,viewImage, uploadPostImages }
