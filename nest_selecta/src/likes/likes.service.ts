import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';
import { ReviewsService } from 'src/reviews/reviews.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like) 
    private likeRepo: Repository<Like>,
    private reviewsService: ReviewsService,
    private usersService: UsersService,
  ) {}

  async create(review_id, user_id: number) {
    const review = await this.reviewsService.findOne(review_id);
    const user = await this.usersService.findOne(user_id);
    if (!review) {
      throw new NotFoundException('THERE IS NO SUCH REVIEW!');
    }
    if (!user) {
      throw new NotFoundException('THERE IS NO SUCH USER!');
    }
    const like = this.likeRepo.create();
    like.review = review;
    like.user = user;
    return this.likeRepo.save(like);
  }

  findOne(id: number) {
    const like = this.likeRepo.findOneBy({id: id});
    if (!like) {
      throw new NotFoundException('DIDNT LIKED')
    }
    return like;
  }

  async remove(user_id: number, like_id: number) {
    const like = await this.findOne(like_id);
    if (user_id != like.user.id) throw new ForbiddenException('HAVE NO RIGHTS TO DO THIS');
    return this.likeRepo.remove(like);
  }
}
