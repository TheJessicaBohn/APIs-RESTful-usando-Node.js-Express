import express from "express";
import { UsersController } from "../controllers/users.controllers";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.getAll);

userRoutes.get("/users/:id", UsersController.getById);

userRoutes.post("/users", UsersController.create);

userRoutes.put("/users/:id", UsersController.update);

userRoutes.delete("/users/:id", UsersController.delete);