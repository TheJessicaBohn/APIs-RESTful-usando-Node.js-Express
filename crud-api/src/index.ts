import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes/index";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { pageNoteFoundHadler } from "./middlewares/page-not-found.middleare";

initializeApp();
const app = express();

routes(app);
errorHandler(app);
pageNoteFoundHadler(app);

app.listen(3000, () => {
  console.log(" Servidor on, porta 3000");
});