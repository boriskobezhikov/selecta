import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService
    ) {}
    
    async signIn(authDto: AuthDto) {
        const user = await this.usersService.findByLogin(authDto.login);
        const isMatch = await bcrypt.compare(authDto.password,user.password);
        console.log(isMatch)
        if (!user) {
            throw new UnauthorizedException('NO SUCH USER!');
        }
        if (!isMatch) {
            throw new UnauthorizedException('WRONG PASSWORD OR LOGIN!');
        }
        const payload = {sub: user.id,login: user.login};
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }

}
