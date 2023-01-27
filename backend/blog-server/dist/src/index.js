"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const customLogger_1 = require("../logger/customLogger");
const mongodbConnect_1 = __importDefault(require("./utils/mongodbConnect"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.use('/api', routers_1.testRouter);
app.listen(port, async () => {
    (0, customLogger_1.logInfo)('index.ts', './index.ts', `Server running on ${port}`);
    await (0, mongodbConnect_1.default)();
});
