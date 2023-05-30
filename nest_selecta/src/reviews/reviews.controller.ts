import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, NotFoundException, ForbiddenException } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createReviewDto: CreateReviewDto, @Req() request) {
    const id: number = request.user.id;
    return this.reviewsService.create(createReviewDto,id);
  }

  @Get('popular/:album_id')
  getPopular(@Param('album_id') album_id:number) {
    return this.reviewsService.getPopular(album_id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reviewsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto, @Req() request) {
    const review = await this.findOne(id);

    if (!review) throw new NotFoundException('THERE IS NO SUCH REVIEW!')
    if (review.user.id != request.user.id) throw new ForbiddenException('YOU HAVE NO RIGHT TO DO THIS!')

    return this.reviewsService.update(id, updateReviewDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Req() request) {
    const review = await this.findOne(id);
    if (review.user.id != request.user.id) throw new ForbiddenException('YOU HAVE NO RIGHTS TO DO THIS!');
    return this.reviewsService.remove(id);
  }
}
