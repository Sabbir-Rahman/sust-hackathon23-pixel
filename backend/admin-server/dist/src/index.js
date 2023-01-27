"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
const customLogger_1 = require("../logger/customLogger");
const mongodbConnect_1 = __importDefault(require("./utils/mongodbConnect"));
const user_router_1 = __importDefault(require("./routers/user.router"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome from admin backend');
});
app.use('/api', routers_1.testRouter);
app.use('/api/v1/user', user_router_1.default);
app.listen(port, async () => {
    (0, customLogger_1.logInfo)('index.ts', './index.ts', `Server running on ${port}`);
    await (0, mongodbConnect_1.default)();
});
