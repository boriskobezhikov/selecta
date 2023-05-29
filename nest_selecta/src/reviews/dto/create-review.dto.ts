import { IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @IsNumber()
    album_id: number;

    @IsString()
    text: string;

}
