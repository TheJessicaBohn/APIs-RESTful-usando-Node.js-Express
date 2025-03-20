import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Bem Vindo a lojinha! - ;-]");
});

let id = 0;

let usuarios: {
  id: number,
  nome: string,
  email: string,
  idade: number
}[] = [];

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.get("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = usuarios.find(user => user.id === userId);
  res.send(user);
});

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  user.id = ++id;
  usuarios.push(user);
  res.send({
    message: "Usuário criado com sucesso!"
  })
});

app.listen(3000, () => {
  console.log(" Servidor on, porta 3000");
});