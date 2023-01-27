/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config()

export default {
  PORT: process.env.PORT,
  MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
}
