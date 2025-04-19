import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

export const authRoutes = Router();

authRoutes.post("/auth/login", expressAsyncHandler(AuthController.login));