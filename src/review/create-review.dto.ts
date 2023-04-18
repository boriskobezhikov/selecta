import { Album } from "src/albums/albums.entity";
import { User } from "src/users/users.entity";

export class CreateReviewDto {
    rating: number;
    message: string;
    userId: number;
    albumId: number;
  }