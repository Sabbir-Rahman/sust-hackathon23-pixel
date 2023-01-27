"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    PORT: process.env.PORT,
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
    setWorkFactor: Number(process.env.SET_WORK_FACTOR),
    accessTokenTtl: '1000m',
    privateKey: process.env.RSA_PRIVATE_KEY,
    publicKey: process.env.RSA_PUBLIC_KEY,
};
