import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) =>{
  res.send("Bem Vindo a lojinha! - ;-]");
});

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

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  usuarios.push(user);
  res.send({
    message: "Usuário criado com sucesso!"
  })
});

app.listen(3000, () => {
    console.log(" Servidor on, porta 3000");
});