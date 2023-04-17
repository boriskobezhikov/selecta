import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./create-review.dto";

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {};

    @Get()
    
    findAll() {
        return this.reviewsService.findAll();
    }
    @Get() 
    findOne(@Param('id') id: string) {
        return this.reviewsService.findOne(+id);
    }
    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.reviewsService.remove(+id);
    }
    @Post()
    create(@Body() createReviewDto : CreateReviewDto) {
        return this.reviewsService.create(createReviewDto);
    }
}

