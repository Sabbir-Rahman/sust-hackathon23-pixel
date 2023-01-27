"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf } = winston_1.format;
// eslint-disable-next-line no-shadow
const myFormat = printf(({ level, message, timestamp }) => {
    const errorMessages = message.split('|');
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const returnMessage = `${timestamp} [${level}] [Origin:${errorMessages[0]}] [Function:${errorMessages[1]}] [File:${errorMessages[2]}] [Message:${errorMessages[3]}]`;
    return returnMessage;
});
const customLogger = (0, winston_1.createLogger)({
    level: 'debug',
    format: combine(winston_1.format.colorize(), winston_1.format.splat(), winston_1.format.simple(), timestamp({ format: 'HH:mm:ss' }), myFormat),
    transports: [new winston_1.transports.Console()],
});
exports.default = customLogger;
