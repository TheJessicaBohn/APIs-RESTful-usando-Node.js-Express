import { Joi } from "celebrate";

export type User = {
    email: string;
    id: string;
    idade: number;
    nome: string;
}

export const userSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    idade: Joi.number().required(),
    nome: Joi.string().required()
});