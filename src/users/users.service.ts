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

    findAll() {
        return this.usersRepository.find();
    }

    findOne(id: number) {
        return this.usersRepository.findOneBy({userId: id});
    }

    create(createUserDto : CreateUserDto) {
        const saltRounds = 10;
        const user = new User();
        const hash = bcrypt.hashSync(createUserDto.password, saltRounds);
        user.login = createUserDto.login;
        user.password = hash; 
        return this.usersRepository.save(user)
    }

    async remove(id:number) {
        await this.usersRepository.delete(id);
    }
}