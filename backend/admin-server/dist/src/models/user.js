"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    nickName: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    email: { type: String },
    role: { type: [String], required: true },
    isEmailVerified: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
}, {
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)('users', userSchema);
exports.default = UserModel;
