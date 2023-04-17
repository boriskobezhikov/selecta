import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Review } from "./reviews.entity";
import { CreateReviewDto} from "./create-review.dto";
import { User } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";
import { AlbumsService } from "src/albums/albums.service";

@Injectable()
export class ReviewsService {
    constructor( 
        @InjectRepository(Review)
        private reviewsRepository: Repository<Review>,
    ) {}

    findAll() {
        return this.reviewsRepository.find();
    }

    findOne(id: number) {
        return this.reviewsRepository.findOneBy({id});
    }

    create(createReviewDto : CreateReviewDto) {
        const review = new Review();
        review.rating = createReviewDto.rating;
        review.message = createReviewDto.message;
        review.user = createReviewDto.user;
        review.album = createReviewDto.album;
        return this.reviewsRepository.save(review)
    }

    async remove(id:number) {
        await this.reviewsRepository.delete(id);
    }
}