import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors} from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { UsersService } from "./users.service";
import { ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {};

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }
    @Get(':login') 
    findByLogin(@Param('login') login: string) {
        return this.usersService.findByLogin(login);
    }
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
    @Post()
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createUserDto : CreateUserDto, @UploadedFile() image: Express.Multer.File) {
        return this.usersService.create(createUserDto, image);
    }
}

