import express from "express";
import { UsersController } from "../controllers/users.controllers";
import expressAsyncHandler from "express-async-handler";
import { celebrate, Joi, Segments } from "celebrate";

export const userRoutes = express.Router();

userRoutes.get("/users", expressAsyncHandler(UsersController.getAll));

userRoutes.get("/users/:id", expressAsyncHandler(UsersController.getById));

userRoutes.post("/users", celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    idade: Joi.number().required(),
    nome: Joi.string().required()
  })
}), expressAsyncHandler(UsersController.create));

userRoutes.put("/users/:id", expressAsyncHandler(UsersController.update));

userRoutes.delete("/users/:id", expressAsyncHandler(UsersController.delete));