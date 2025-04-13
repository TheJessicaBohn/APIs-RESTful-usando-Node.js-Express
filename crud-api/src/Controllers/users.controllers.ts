import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import { NotFoundError } from "../errors/not-found.error";
import { userService } from "../services/user.service";

type User = {
  id: number,
  nome: string,
  email: string,
  idade: number
};

export class UsersController {

  static async getAll(req: Request, res: Response, next: NextFunction) {
    res.send(await new userService().getAll());
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    res.send(await new userService().getById());
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    res.send(await new userService().create());
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    res.send(await new userService().update());
  }

  static async delete(req: Request, res: Response) {
    res.send(await new userService().delete());
  }
}