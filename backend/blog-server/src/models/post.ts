import { Schema, model, Model } from 'mongoose'
import { Post, PostDoc } from '../interfaces/blog'

const postSchema = new Schema<Post>({
  userId: String,
  title: String,
  descryption: String,
  images: [String],
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [{ type: String }],
  },
  reactions: {
    upvote: { type: Number, default: 0 },
    downvote: { type: Number, default: 0 },
  },
  postType: { type: String },
  tags: [{ type: String }],
  problemTag: { type: Boolean },
  status: { type: String }
})

const PostModel = model<PostDoc>('posts',postSchema) as Model<PostDoc>

export default PostModel