import { Schema, model, Model } from 'mongoose'
import { Post, PostDoc } from '../interfaces/blog'

const postSchema = new Schema<Post>({
  userId: String,
  title: String,
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
    downvote: { type: Number, default: 0 },
  },
  postType: { type: String, required: true },
  tags: [{ type: String }],
  problemTag: { type: String },
  status: { type: String, default: 'active' },
})

const PostModel = model<PostDoc>('posts', postSchema) as Model<PostDoc>

export default PostModel
