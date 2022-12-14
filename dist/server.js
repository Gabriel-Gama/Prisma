"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/test', () => {
    console.log('Application of node-cron and postgres');
});
app.listen(3030, () => {
    console.log('Server is running in port 3030!');
});
//# sourceMappingURL=server.js.map