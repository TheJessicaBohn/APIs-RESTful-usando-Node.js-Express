import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";

type User = {
  id: string,
  nome: string,
  email: string,
  idade: number
};

export class UsersController {

  static async getAll(req: Request, res: Response, next: NextFunction) {
    res.send(await new userService().getAll());
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    res.send(await new userService().getById(userId));
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    let user = req.body;
    await new userService().create(user);
    res.status(201).send({
      message: `Usuário criado com sucesso!`
    });
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id;
    let user = req.body as User;
    await new userService().update(userId, user);
    res.send({
      message: "Usuário alterado com sucesso!"
  });
  }

  static async delete(req: Request, res: Response) {
    let userId = req.params.id;
    await new userService().delete(userId);
    res.status(204).end();
  }
}