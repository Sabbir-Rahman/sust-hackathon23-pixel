import express, { Response } from 'express'
import cors from 'cors'

import postRouter from '../routers/post.routes'

function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.get('/', (req, res) => {
    res.send('Welcome from blog-server')
  })
  app.use('/post', postRouter)

  return app
}

export default createServer
