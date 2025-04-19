import { Router } from "express";
import { UsersController } from "../controllers/users.controllers";
import expressAsyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { userSchema } from "../models/user.model";

export const userRoutes = Router();

userRoutes.get("/users", expressAsyncHandler(UsersController.getAll));

userRoutes.get("/users/:id", expressAsyncHandler(UsersController.getById));

userRoutes.post("/users", celebrate({ [Segments.BODY]: userSchema }), expressAsyncHandler(UsersController.create));

userRoutes.put("/users/:id",celebrate({ [Segments.BODY]: userSchema }), expressAsyncHandler(UsersController.update));

userRoutes.delete("/users/:id", expressAsyncHandler(UsersController.delete));