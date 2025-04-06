import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import { ValidationError } from "../errors/validation.error";
import { NotFoundError } from "../errors/not-found.error";

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
      if (doc.exists) {
        res.send({
          id: doc.id,
          ...doc.data()
        });
      } else {
        throw new NotFoundError("Usuário não encontrado!")
      }
    } catch (error) {
      res.status(400).send({
        message: "Usuário não encontrado!"
      })
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let user = req.body;
      if (!user.email || user.email?.lenth === 0) {
        throw new ValidationError("E-mail é um campo obrigatório!");
      } else if (user.idade) {
        throw new ValidationError("Idade é um campo obrigatório!");
      } else if (user.nome || user.email?.lenth === 0) {
        throw new ValidationError("Nome é um campo obrigatório!");
      };

      const savedUser = await getFirestore().collection("users").add(user);

      res.status(201).send({
        message: `Usuário ${savedUser.id} criado com sucesso!`
      })
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      let userId = req.params.id;
      let user = req.body as User;
      let docRef = getFirestore().collection("users").doc(userId);

      if ((await docRef.get()).exists) {
        await getFirestore().collection("users").doc(userId).set({
          nome: user.nome,
          email: user.email,
          idade: user.idade
        });
        res.send({
          message: "Usuário alterado com sucesso!"
        });
      } else {
        throw new NotFoundError("Usuário não encontrado!");
      }
    } catch (error) {
      res.status(400).send({
        message: "Não foi possível atualizar este usuário, verifique se as informações enviadas são conflitantes"
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