"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    PORT: process.env.PORT,
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
};
