"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const user_service_1 = __importDefault(require("../services/user.service"));
const utils_1 = require("../utils");
const ModelError_1 = __importDefault(require("../utils/ModelError"));
async function createUser(req, res) {
    const response = {
        isSuccess: false,
        statusCode: 400,
        message: 'User not created',
        developerMessage: '',
        isReadOnly: false,
        data: {},
    };
    let username = req.body.nickName.toLowerCase();
    let isUserExist = await user_service_1.default.findUserByUserName(username);
    while (isUserExist) {
        username = await utils_1.randomTextUtils.generateRandomString(username, 3);
        isUserExist = await user_service_1.default.findUserByUserName(username);
    }
    const isDuplicateEmail = await user_service_1.default.findUserByEmail(req.body.email);
    const userHashPass = await utils_1.bcryptUtils.hashPassword(req.body.password);
    if (isDuplicateEmail) {
        response.message = 'Email already exist';
    }
    else {
        const userObj = {
            ...req.body,
            password: userHashPass,
            username,
            role: ['user'],
        };
        const user = await user_service_1.default.createUser(userObj);
        if (user instanceof ModelError_1.default) {
            response.developerMessage = user.error;
        }
        else {
            response.isSuccess = true;
            response.message = 'User created succesfully';
            response.statusCode = 200;
            response.data = user;
        }
    }
    res.status(response.statusCode).json(response);
}
const userLogin = async (req, res) => {
    const response = {
        isSuccess: false,
        statusCode: 400,
        message: 'Email of password not correct. Login unsuccessfull',
        developerMessage: '',
        isReadOnly: false,
        data: {},
    };
    let accessToken = '';
    let refreshToken = '';
    const user = await user_service_1.default.loginUser(req.body.email, req.body.password);
    if (user instanceof ModelError_1.default) {
        response.developerMessage = user.error;
    }
    else if (user) {
        const jwtObject = {
            userId: String(user._id),
            name: user.name,
            role: user.role,
        };
        accessToken = await utils_1.jwtUtils.signJwt(jwtObject, {
            expiresIn: config_1.default.get('accessTokenTtl'),
        });
        if (accessToken.length > 0) {
            response.message = 'Login successfull';
            response.isSuccess = true;
            response.statusCode = 200;
            response.data = { ...user, accessToken, refreshToken };
        }
    }
    res.status(response.statusCode).json(response);
};
exports.default = { createUser, userLogin };
