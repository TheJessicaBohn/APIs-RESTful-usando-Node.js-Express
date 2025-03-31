import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
  id: number,
  nome: string,
  email: string,
  idade: number
};

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
    let userId = req.params.id;
    let user = req.body as User;

    getFirestore().collection("users").doc(userId).set({
      nome: user.nome,
      email: user.email,
      idade: user.idade
    });

    res.send({
      message: "Usuário alterado com sucesso!"
    });
  }

  static async delete(req: Request, res: Response) {
    let userId = req.params.id;

    await getFirestore().collection("users").doc(userId).delete();
    res.send({
      message: "Usuário excluído com sucesso!"
    })
  }
}