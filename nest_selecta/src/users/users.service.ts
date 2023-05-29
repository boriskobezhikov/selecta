import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User) private userRepo: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto)
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password,salt);
    user.password = hash;
    return this.userRepo.save(user);
  }

  findOne(id: number) {
    const user = this.userRepo.findOneBy({id: id})
    if (!user) {
      throw new NotFoundException('THERE IS NO SUCH USER! CHECK YOUR INFO');
       
    }
    return user;
  }

  findByLogin(login: string) {
    const user = this.userRepo.findOneBy({login: login});
    if (!user) {
      throw new NotFoundException('THERE IS NO SUCH USER! CHECK YOUR INFO');
       
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return '';
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('THERE IS NO SUCH USER! CHECK YOUR INFO');
    };
    return this.userRepo.remove(user);
  }
}
