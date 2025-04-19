import { Request, Response } from "express";

export class AuthController {
    
    static async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const userRecord = await new AuthService().login();
        const token =  await userRecord.user.getIdToken(true);

        res.send({
            token: token
        });
    }
}