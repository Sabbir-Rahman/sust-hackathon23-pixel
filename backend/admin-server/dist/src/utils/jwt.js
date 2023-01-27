"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const privateKey = config_1.default.get('privateKey');
const publicKey = config_1.default.get('publicKey');
function signJwt(object, options) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return jsonwebtoken_1.default.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'RS256',
    });
}
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    }
    catch (e) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null,
        };
    }
}
exports.default = {
    signJwt,
    verifyJwt,
};
