import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors} from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { UsersService } from "./users.service";
import { ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {};

    @Get(':login') 
    findByLogin(@Param('login') login: string) {
        return this.usersService.findOne(login);
    }

    @Delete(':id')
    deleteUser(@Param('login') login: string) {
        return this.usersService.delete(login);
    }

    @Post()
    registerUser(@Body() createUserDto : CreateUserDto) {
        return this.usersService.register(createUserDto);
    }
}

