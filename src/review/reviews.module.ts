import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsController} from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { Review } from './reviews.entity';


@Module ({
    controllers: [ReviewsController],
    providers: [ReviewsService],
    imports: [TypeOrmModule.forFeature([Review])],
    exports: [TypeOrmModule]
})

export class ReviewsModule { };