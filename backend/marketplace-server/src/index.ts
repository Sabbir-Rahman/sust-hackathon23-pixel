import express from 'express'
import cors from 'cors'
import { testRouter } from './routers'
import { logInfo } from '../logger/customLogger'
import connect from './utils/mongodbConnect'
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Welcome from admin marketplace')
})

app.use('/api',testRouter)

app.listen(port, async () => {
  logInfo('index.ts', './index.ts', `Server running on ${port}`)
  await connect()
})
