import { Schema, model, Model } from 'mongoose'
import { Post, PostDoc } from '../interfaces/blog'

const postSchema = new Schema<Post>({
  userId: String,
  nickName: String,
  isAnonymous: { type: Boolean, default: false },
  title: String,
  parentPostId: String,
  descryption: String,
  images: [String],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: { type: [Number], required: true },
  },
  reactions: {
    upvote: { type: Number, default: 0 },
    voteUsersId: { type: String, default: [] },
    downvote: { type: Number, default: 0 },
    comments: { type: Number, default: 0},
    isSolved: { type: Boolean, default: false },
    repost: { type: Number, default: 0}
  },
  postType: { type: String, required: true },
  tags: [{ type: String }],
  problemTag: { type: String },
  status: { type: String, default: 'active' },
})

const PostModel = model<PostDoc>('posts', postSchema) as Model<PostDoc>

export default PostModel
