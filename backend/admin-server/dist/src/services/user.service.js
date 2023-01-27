"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const customLogger_1 = require("../../logger/customLogger");
const user_1 = __importDefault(require("../models/user"));
const utils_1 = require("../utils");
const ModelError_1 = __importDefault(require("../utils/ModelError"));
const FILENAME = 'admin-server/src/services/user.service.ts';
async function createUser(data) {
    try {
        const user = await user_1.default.create(data);
        return user;
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('createUser', FILENAME, String(error));
        return new ModelError_1.default(error);
    }
}
async function findUserByUserId(userId) {
    try {
        const user = await user_1.default.findById(userId).orFail();
        return user;
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('findUserByUserId', FILENAME, String(error));
        return new ModelError_1.default(error);
    }
}
async function findUserByUserName(username) {
    try {
        const user = await user_1.default.findOne({ username }).orFail();
        return true;
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('findUserByUserId', FILENAME, String(error));
        return false;
    }
}
async function findUserByEmail(email) {
    try {
        const user = await user_1.default.findOne({ email }).orFail();
        return true;
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('findUserByEmail', FILENAME, String(error));
        return false;
    }
}
const loginUser = async (email, password) => {
    try {
        const user = await user_1.default.findOne({
            email
        }).orFail();
        const isPassMatch = await utils_1.bcryptUtils.comparePassword(user.password, password);
        (0, customLogger_1.logServiceError)('loginUser', FILENAME, String('Password compare result:' + isPassMatch));
        if (isPassMatch) {
            return (0, lodash_1.omit)(user.toJSON(), 'password');
        }
        else {
            return false;
        }
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('loginUser', FILENAME, String(error));
        return new ModelError_1.default(error);
    }
};
exports.default = {
    createUser,
    findUserByUserId,
    findUserByUserName,
    findUserByEmail,
    loginUser,
};
