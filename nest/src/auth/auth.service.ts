import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) {}

    async signIn(login: string, password: string) {
        const user = await this.usersService.findOne(login);
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new UnauthorizedException();
        }
        const payload = {login: user.login}
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}