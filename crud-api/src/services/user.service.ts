import { getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";
import { ValidationError } from "../errors/validation.error";

export class userService{
    async getAll(): Promise<User[]> {
        const snapshot = await getFirestore().collection("users").get();
        
        const usersReturn = snapshot.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        }) as User[];
        
        return usersReturn;
    }

    async getById(): Promise<User> {
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

        return doc
    }
    async create(): Promise<User[]> {
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
    }
    async update(): Promise<User[]> {
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
    }
    async delete(): Promise<User[]> {
        let userId = req.params.id;

        await getFirestore().collection("users").doc(userId).delete();
        res.status(204).end();
    }
} 