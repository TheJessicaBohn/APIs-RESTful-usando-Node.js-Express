import express from "express";
import { authRoutes } from "./auth.route";
import { userRoutes } from "./users.route";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(authRoutes);
  app.use(userRoutes);
}