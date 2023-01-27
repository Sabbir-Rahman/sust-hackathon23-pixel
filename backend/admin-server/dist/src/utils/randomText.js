"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function generateRandomString(prevText, length) {
    let result = prevText;
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function generateOtp(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.default = {
    generateRandomString,
    generateOtp,
};
