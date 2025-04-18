import { NotFoundError } from "../errors/not-found.error";
import { User } from "../models/user.model";
import { userRepository } from "../repositories/user.repository";

export class userService {

    private userRepository: userRepository;

    constructor() {
        this.userRepository = new userRepository();
    }

    async getAll(): Promise<User[]> {
       return this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        const user = await this.userRepository.getById(id);
        if(!user) {
            throw new NotFoundError("Usuário não encontrado");
        }

        return user;
    }

    async create(user: User) {
        return this.userRepository.create(user);
    }

    async update(id: string, user: User) {
        const existsUser = await this.userRepository.getById(id);

        if(!existsUser) {
            throw new NotFoundError("Usuário não Encontrado");
        }

        existsUser.email = user.email;
        existsUser.idade = user.idade;
        existsUser.nome = user.nome;

        this.userRepository.update(user);
    }

    async delete(id: string) {
        return this.userRepository.delete(id);
    }
} 