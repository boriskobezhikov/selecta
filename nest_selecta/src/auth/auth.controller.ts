import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signIn(@Body() authDto: AuthDto) {
        return this.authService.signIn(authDto)
    }
}
