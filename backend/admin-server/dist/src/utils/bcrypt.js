"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("config"));
const customLogger_1 = require("../../logger/customLogger");
const FILENAME = 'src/utils/bcrypt.ts';
async function hashPassword(password) {
    try {
        const salt = await bcrypt_1.default.genSalt(config_1.default.get('setWorkFactor'));
        const hashPass = await bcrypt_1.default.hash(password, salt);
        return hashPass;
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('hashPassword', FILENAME, String(error));
        return 'Something wrong happen';
    }
}
async function comparePassword(userPassword, inputPassword) {
    try {
        return await bcrypt_1.default.compare(inputPassword, userPassword);
    }
    catch (error) {
        (0, customLogger_1.logServiceError)('comparePassword', FILENAME, String(error));
        return false;
    }
}
exports.default = {
    hashPassword,
    comparePassword,
};
