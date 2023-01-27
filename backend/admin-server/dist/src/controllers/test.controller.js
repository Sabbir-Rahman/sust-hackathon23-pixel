"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const test = async (req, res) => {
    const response = {
        isSuccess: false,
        statusCode: 400,
        message: 'Test not working',
        developerMessage: '',
        isReadOnly: false,
        data: {},
    };
    const data = await services_1.testService.test();
    if (data) {
        response.statusCode = 200;
        response.isSuccess = true;
        response.message = 'Test controller ok';
        response.data = data;
    }
    else {
        response.developerMessage = 'something went wrong';
    }
    res.status(response.statusCode).json(response);
};
const testSqaureFunction = async (num) => {
    return num * num;
};
exports.default = { test, testSqaureFunction };
