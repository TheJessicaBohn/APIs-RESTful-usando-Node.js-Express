import { getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";
import { NotFoundError } from "../errors/not-found.error";

export class userRepository {
    
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

    async getById(id: string): Promise<User> {
            const doc = await getFirestore().collection("users").doc(id).get();
            if (doc.exists) {
                return {
                id: doc.id,
                ...doc.data()
                } as User;
            } else {
                throw new NotFoundError("Usuário não encontrado!")
            }
        }
        async create(user: User) {
            await getFirestore().collection("users").add(user);
        }
        async update(id: string, user: User) {
            let docRef = getFirestore().collection("users").doc(id);
    
            if ((await docRef.get()).exists) {
            await getFirestore().collection("users").doc(id).set({
                nome: user.nome,
                email: user.email,
                idade: user.idade
            });
            } else {
            throw new NotFoundError("Usuário não encontrado!");
            }
        }
    
        async delete(id: string) {
            await getFirestore().collection("users").doc(id).delete();
        }
}