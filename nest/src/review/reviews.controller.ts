import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards, Request} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./create-review.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { AuthService } from "src/auth/auth.service";
import { JwtService } from "@nestjs/jwt";

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService,
        private jwtService: JwtService) {};

    @Get()
    
    findAll() {
        return this.reviewsService.findAll();
    }
    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.reviewsService.findOne(+id);
    }
    @Delete(':id')
    remove(@Param('id') id:number) {
        return this.reviewsService.remove(+id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Request() req, @Body() createReviewDto : CreateReviewDto) {

        const login: string = req.user.login;
        createReviewDto.login = login;
        return this.reviewsService.create(createReviewDto);
    }
}

