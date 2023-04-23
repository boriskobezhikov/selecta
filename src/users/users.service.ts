import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./users.entity";
import { CreateUserDto } from "./create-user.dto";
import * as bcrypt from 'bcrypt'
import * as path from 'path';
import * as fs from 'fs';

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

    async create(createUserDto : CreateUserDto, image: Express.Multer.File) {
        const saltRounds = 10;
        const user = new User();
        
        const hash = bcrypt.hashSync(createUserDto.password, saltRounds);

        const filename = `${new Date().getTime()}-${image.originalname}`;
        const filepath = path.join(__dirname,'..','..','uploads', filename);
        await fs.promises.writeFile(filepath, image.buffer);

        user.profile_image = filepath;

        user.login = createUserDto.login;
        user.password = hash; 
        user.profile_image = filepath;

        await this.usersRepository.save(user);

        return user
    }

    async remove(id:number) {
        await this.usersRepository.delete(id);
    }
}