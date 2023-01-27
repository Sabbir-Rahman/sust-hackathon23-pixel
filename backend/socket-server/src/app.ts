/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unused-expressions */
import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { UserType, UsersType } from './interface'
import logger from '../logger/deafultLogger'

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

let users: UsersType = []

// adding the user if user not in the users array for calculate active users
const addUser = (userId: string, socketId: string) => {
  !users.some((user: UserType) => user.userId === userId) &&
    users.push({ userId, socketId })
}

const removeUser = (socketId: string) => {
  users = users.filter((user: UserType) => user.socketId !== socketId)
}

// get the single user
const getUser = (userId: string) =>
  users.find((user: UserType) => user.userId === userId)

io.on('connection', (socket) => {
  console.log(`User with socket id ${socket.id} connected to socket server`)
  socket
    .to(socket.id)
    .emit(
      'connectserver',
      `User with socketId:${socket.id} connected to the socket server`
    )
  socket.on('join server', (userId: string) => {
    addUser(userId, socket.id)
    io.emit('getUsers', users)
  })

  // join room it will autometically leave the room when disconnect
  socket.on('join room', async (roomId: string) => {
    await socket.join(roomId)
  })

  // send and get message
  socket.on('sendMessage', ({ content, senderId, roomId }) => {
    const payload = {
      content,
      senderId,
      time: new Date(),
    }
    socket.to(roomId).emit('new message', payload)
  })

  socket.on('disconnect', () => {
    logger('A user disconnected!')
    removeUser(socket.id)
    io.emit('getUsers', users)
  })
})



httpServer.listen(port, async () => {
  console.log('Socket server is listening to 8900')
})
