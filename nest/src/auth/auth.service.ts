import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}

    async signIn(login: string, pass: string): Promise<any> {
        const user = await this.usersService.findByLogin(login);

        if (user == null) {
            throw new UnauthorizedException();
        }

        const isMatch = await bcrypt.compare(pass, user.password)
        if (!isMatch ) {
        throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        const payload = { username: user.login, sub: user.userId };
        return {
        access_token: await this.jwtService.signAsync(payload),
        }
    }
}