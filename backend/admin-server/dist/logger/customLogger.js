"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logServiceError = exports.logInfo = exports.logQueryError = exports.logControllerError = void 0;
/* eslint-disable import/prefer-default-export */
const logger_1 = __importDefault(require("./logger"));
const logControllerError = (functionName, file, message) => {
    logger_1.default.error(`Controller|${functionName}|${file}|${message}`);
};
exports.logControllerError = logControllerError;
const logQueryError = (functionName, file, message) => {
    logger_1.default.error(`Query|${functionName}|${file}|${message}`);
};
exports.logQueryError = logQueryError;
const logInfo = (functionName, file, message) => {
    logger_1.default.info(`Info:|${functionName}|${file}|${message}`);
};
exports.logInfo = logInfo;
const logServiceError = (functionName, file, message) => {
    logger_1.default.error(`Service|${functionName}|${file}|${message}`);
};
exports.logServiceError = logServiceError;
