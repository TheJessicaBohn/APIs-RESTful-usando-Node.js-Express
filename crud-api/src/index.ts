import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes/index";

initializeApp();
const app = express();

routes(app);

app.listen(3000, () => {
  console.log(" Servidor on, porta 3000");
});