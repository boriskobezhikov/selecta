import { ApiProperty } from "@nestjs/swagger";

export class CreateAlbumDto {
  @ApiProperty()
  Name: string;

  @ApiProperty()
  Author: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: any; 
  }