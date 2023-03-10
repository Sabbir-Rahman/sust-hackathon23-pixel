import { Date } from 'mongoose'
import { CorrectedDocument } from '../models/types'

export interface Post {
  userId: string
  name: string
  isAnonymous?: boolean
  title?: string
  parentPostId?: string
  descryption: string
  images?: string[]
  location: {
    coordinates: number[]
    type: string
  }
  reactions?: {
    upvote: number
    voteUsersId: string[]
    downvote: number
    comments: number
    isSolved: boolean
    repost: number
  }
  postType: string
  tags?: string[]
  problemTag: string
  status?: string
}

export type PostDoc = Post & CorrectedDocument

export interface User {
  name: string
  username: string
  nickName: string
  password: string
  image?: string
  totalUpvoteCount?: number
  totalRepostCount?: number
  email: string
  role: string[]
  isEmailVerified?: boolean
  isVerified?: boolean
}

export type UserDoc = User & CorrectedDocument
