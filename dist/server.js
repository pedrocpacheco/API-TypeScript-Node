"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// ? Nome
const PORT = process.env.PORT || 3000;
app.get("/", routes_1.createCourse);
app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`));
