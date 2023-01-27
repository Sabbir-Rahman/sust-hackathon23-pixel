"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmailSchema = exports.addUserSchema = void 0;
const zod_1 = require("zod");
exports.addUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: zod_1.z.string(),
        nickName: zod_1.z.string(),
        password: zod_1.z.string(),
        email: zod_1.z.string(),
    }),
});
exports.addEmailSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
