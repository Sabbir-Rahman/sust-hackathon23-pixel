"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function test() {
    return 'test service working';
}
const testSqaureFunction = async (num) => {
    return num * num;
};
exports.default = { test, testSqaureFunction };
