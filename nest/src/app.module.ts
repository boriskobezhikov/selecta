import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './review/reviews.module';
import { Review } from './review/reviews.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ReviewsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'post1983',
      database: 'selecta',
      entities: [User, Review],
      synchronize: true,
      migrations:[]
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
