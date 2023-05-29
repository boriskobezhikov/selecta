import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[JwtModule.register({
    global: true,
    secret: 'secret',
    signOptions: {expiresIn: '2500s'}
  }),UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
