import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) =>{
  res.send("Bem Vindo a lojinha! - ;-]");
});

app.get("/users", (req: Request, res: Response) => {
  let usuarios = [
    {
      nome: "Jéssica Bohn",
      idade: 28
    },
    {
      nome: "Erich Bönisch",
      idade: 32
    }
  ];
  res.send(usuarios);
});

app.listen(3000, () => {
    console.log(" Servidor on, porta 3000");
});