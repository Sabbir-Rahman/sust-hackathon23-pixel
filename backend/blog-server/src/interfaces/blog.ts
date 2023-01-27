import { Date } from 'mongoose'
import { CorrectedDocument } from '../models/types'

export interface Post {
  userId: string
  title: string
  descryption: string
  images?: string[]
  location: {
    type: string
    coordinates: number[]
  }
  reactions?: {
    upvote: number
    downvote: number
  }
  postType: string
  tags?: string[]
  problemTag: string
  status?: string
}

export type PostDoc = Post & CorrectedDocument
