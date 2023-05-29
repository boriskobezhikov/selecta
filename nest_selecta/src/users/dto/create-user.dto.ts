import {IsEmail, IsString, MinLength} from 'class-validator'
export class CreateUserDto {
    @IsString()
    login: string;
    
    @IsEmail()
    email: string;

    @MinLength(6)
    @IsString()
    password: string;
}
