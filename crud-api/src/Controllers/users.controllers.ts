import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
  id: number,
  nome: string,
  email: string,
  idade: number
};

let usuarios: User[] = [];

export class UsersController {

  static async getAll(req: Request, res: Response) {
    const snapshot = await getFirestore().collection("users").get();

    const usersReturn = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    res.send(usersReturn);
  }

  static async getById(req: Request, res: Response) {
    let userId = req.params.id;
    const doc = await getFirestore().collection("users").doc(userId).get();
    let user = {
      id: doc.id,
      ...doc.data()
    }
    res.send(user);
  }

  static async create(req: Request, res: Response) {
    let user = req.body;

    const savedUser = await getFirestore().collection("users").add(user);

    res.send({
      message: `Usuário ${savedUser.id} criado com sucesso!`
    })
  }

  static update(req: Request, res: Response) {
    let userId = Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user: User) => _user.id === userId);

    usuarios[indexOf].nome = user.nome;
    usuarios[indexOf].email = user.email;
    usuarios[indexOf].idade = user.idade;

    res.send({
      message: "Usuário alterado com sucesso!"
    });
  }

  static delete(req: Request, res: Response) {
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user: User) => user.id === userId);
    usuarios.splice(indexOf, 1);
    res.send({
      message: "Usuário excluído com sucesso!"
    })
  }
}