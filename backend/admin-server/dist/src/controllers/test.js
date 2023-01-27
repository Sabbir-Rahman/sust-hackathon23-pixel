"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_controller_1 = __importDefault(require("./test.controller"));
test("it should pass", async () => {
    expect(true).toBe(true);
});
test("square function", async () => {
    const response = await test_controller_1.default.testSqaureFunction(2);
    expect(response).toBe(4);
});
