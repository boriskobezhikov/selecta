import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findOne(@Param('id') id: number, @Req() request) {
    if (request.user.id != id) {
      throw new ForbiddenException('HAVE NO RIGHTS TO DO THIS!')
    }
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('THERE IS NO SUCH USER! CHECK YOUR INFO');
    }
    else return user;
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Req() request) {
    if (request.user.id != id) {
      throw new ForbiddenException('HAVE NO RIGHTS TO DO THIS!')
    }
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async remove(@Param('id') id: number, @Req() request) {
    if (request.user.id != id) {
      throw new ForbiddenException('HAVE NO RIGHTS TO DO THIS!')
    }
    const user = await this.usersService.remove(id);
    if (!user) {
      throw new NotFoundException('THERE IS NO SUCH USER! CHECK YOUR INFO');
    }
    else return user;
  }
}
