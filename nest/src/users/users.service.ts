import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./create-user.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor( 
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    findOne(log: string) {
        return this.usersRepository.findOneBy({login: log});
    }

    async register(createUserDto : CreateUserDto) {
        const saltRounds: number = 10;
        const user: User = new User();
        
        const hash = bcrypt.hashSync(createUserDto.password, saltRounds);

        user.login = createUserDto.login;
        user.email = createUserDto.email;
        user.profile_image = null;
        user.password = hash; 

        await this.usersRepository.save(user);

        return user
    }

    async delete(login: string) {
        await this.usersRepository.delete(login);
    }
}