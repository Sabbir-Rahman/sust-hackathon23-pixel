"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logServiceError = exports.logControllerError = void 0;
const deafultLogger_1 = __importDefault(require("./deafultLogger"));
const logControllerError = (file, method, message) => {
    deafultLogger_1.default.error({
        service: 'quiz',
        type: 'controller',
        file,
        method,
        message,
    });
};
exports.logControllerError = logControllerError;
const logServiceError = (file, method, message) => {
    deafultLogger_1.default.error({
        service: 'quiz',
        type: 'query',
        file,
        method,
        message,
    });
};
exports.logServiceError = logServiceError;
