"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const mongoose_1 = __importDefault(require("mongoose"));
class ModelError {
    constructor(error) {
        this.error = this.processError(error);
    }
    processError(error) {
        if (error === undefined) {
            return 'Unknown error';
        }
        if (typeof error === 'string') {
            return error;
        }
        if (error instanceof mongoose_1.default.Error.ValidationError) {
            let errors = '';
            Object.keys(error.errors).forEach((key) => {
                errors = `${errors + error.errors[key].message}, `;
            });
            return errors.slice(0, errors.length - 2);
        }
        if (error instanceof Error) {
            return error.message;
        }
        return 'Mongo error';
    }
}
exports.default = ModelError;
