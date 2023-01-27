"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`);
const logger = createLogger({
    level: 'debug',
    format: combine(format.colorize(), timestamp({ format: 'HH:mm:ss' }), myFormat),
    transports: [new transports.Console()],
});
exports.default = logger;
