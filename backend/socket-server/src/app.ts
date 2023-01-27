/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unused-expressions */
import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { UserType, UsersType } from './interface'

const app = express()
const port = 8900

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)


const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
  path: '/socket/',
})

httpServer.listen(port, async () => {
  console.log('Socket server is listening to 8900')
})
