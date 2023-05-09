import { Header } from "@nestjs/common";
import { ApiOAuth2, ApiProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateReviewDto {

  @ApiProperty()
  rating: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  albumId: number;
  
  login: string;
  }