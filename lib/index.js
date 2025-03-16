"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Bem Vindo a lojinha!");
});
app.listen(3000, () => {
    console.log(" Servidor on, porta 3000");
});
//# sourceMappingURL=index.js.map