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
        return this.userRepository.getById(id);
    }

    async create(user: User) {
        return this.userRepository.create(user);
    }

    async delete(id: string) {
        return this.userRepository.delete(id);
    }
} 