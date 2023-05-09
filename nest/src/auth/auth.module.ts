import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global:true,
      secret: 'test',
      signOptions: {expiresIn: '2400s'},
    })
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController]
})

export class AuthModule {}