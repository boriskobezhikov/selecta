import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { UsersService } from "./users.service";

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
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
    @Post()
    create(@Body() createUserDto : CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}

