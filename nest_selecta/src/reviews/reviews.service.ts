import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewsRepo: Repository<Review>,
    private usersService: UsersService
  ) {}

  getPopular(album_id: number) {
  return this.reviewsRepo.createQueryBuilder('review')
  .leftJoinAndSelect('user', 'user', 'review.userId = user.id')
  .select('review.*', 'review')
  .addSelect('user.login', 'login')
  .orderBy('review.id', 'DESC')
  .where('album_id = ' + album_id)
  .limit(3)
  .getRawMany();
  }
  

  async create(createReviewDto: CreateReviewDto, userid: number) {
    const review = this.reviewsRepo.create(createReviewDto);
    const user = await this.usersService.findOne(userid);
    review.user = user;
    return this.reviewsRepo.save(review);
  }

  findOne(id: number) {
    const review = this.reviewsRepo.findOneBy({id: id})
    if (!review) {
      throw new NotFoundException('THERE IS NO SUCH REVIEW! CHECK YOUR INFO');
       
    }
    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const review = await this.findOne(id);
    if (!review) {
      throw new NotFoundException('THERE IS NO SUCH REVIEW! CHECK YOUR INFO');
    }
    Object.assign(review,updateReviewDto);
    return this.reviewsRepo.save(review);
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    return this.reviewsRepo.remove(review);
  }
}
