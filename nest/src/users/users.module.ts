import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module ({
    controllers: [UsersController],
    providers: [UsersService, AuthService],
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule]
})

export class UsersModule { };