import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthDto} from './sign-in.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto.login,signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}