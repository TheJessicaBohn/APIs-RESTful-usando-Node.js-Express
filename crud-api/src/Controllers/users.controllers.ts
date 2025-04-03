import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
  id: number,
  nome: string,
  email: string,
  idade: number
};

export class UsersController {

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const snapshot = await getFirestore().collection("users").get();

      const usersReturn = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      res.send(usersReturn);
    } catch (error) {
      next(error)
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      let userId = req.params.id;
      const doc = await getFirestore().collection("users").doc(userId).get();
      let user = {
        id: doc.id,
        ...doc.data()
      }
      res.send(user);
    } catch (error) {
      res.status(400).send({
        message: "Usuário não encontrado!"
      })
    }
  }

  static async create(req: Request, res: Response) {
    try {
      let user = req.body;

      const savedUser = await getFirestore().collection("users").add(user);

      res.status(201).send({
        message: `Usuário ${savedUser.id} criado com sucesso!`
      })
    } catch (error) {
      res.status(400).send({
        message: "Não foi possivél criar um novo usuário. Verifique se já não existe um usuário com os mesmos dados"
      })
    }
  }

  static update(req: Request, res: Response) {
    try {
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
    } catch (error) {
      res.status(400).send({
        message: "Não foi possivél atualizar este usuário, verifique se as informações enviadas são conflitantes"
      })
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      let userId = req.params.id;

      await getFirestore().collection("users").doc(userId).delete();
      res.status(204).end();
    } catch (error) {
      res.status(403).send({
        message: "Você não possui autorização para excluir esse usuário"
      })
    }
  }
}