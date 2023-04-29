import { ApiProperty } from "@nestjs/swagger";

export class signInDto {
  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;
  }