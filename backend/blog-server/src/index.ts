import express from 'express'
import { postRouter, testRouter } from './routers'
import { logInfo } from '../logger/customLogger'
import connect from './utils/mongodbConnect'
import cors from 'cors'
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Welcome from admin blog')
})

app.use('/api',testRouter)
app.use('/post',postRouter)

app.listen(port, async () => {
  logInfo('index.ts', './index.ts', `Server running on ${port}`)
  await connect()
})
