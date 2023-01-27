/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createLogger, format, transports } = require('winston')

const { combine, timestamp, printf } = format

export interface defaultMyFormat {
  level: string
  message: string
  timestamp: string
}

const myFormat = printf(
  ({ level, message, timestamp }: defaultMyFormat) =>
    `${timestamp} [${level}] ${message}`
)

const logger = createLogger({
  level: 'debug',
  format: combine(
    format.colorize(),
    timestamp({ format: 'HH:mm:ss' }),
    myFormat
  ),
  transports: [new transports.Console()],
})

export default logger
