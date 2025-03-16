import express from "express";

const app = express();

app.get("/", (req, res) =>{
  res.send("Bem Vindo a lojinha! - ;-]");
});

app.listen(3000, () => {
    console.log(" Servidor on, porta 3000");
});