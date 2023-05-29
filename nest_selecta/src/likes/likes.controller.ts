import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/:id')
  create(@Param(':id') review_id:number, @Req() request) {
    const id: number = request.user.id;
    return this.likesService.create(review_id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  remove(@Param('id') like_id: number, @Req() request) {
    const id: number = request.user.id;
    return this.likesService.remove(id, like_id);
  }
}
