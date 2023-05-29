import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { UsersModule } from 'src/users/users.module';
import { Like } from './entities/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Like]), ReviewsModule, UsersModule],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
