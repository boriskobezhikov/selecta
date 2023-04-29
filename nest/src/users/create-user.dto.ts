import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    login: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
    @ApiPropertyOptional({ type: 'string', format: 'binary' })
    image: any; 
  }