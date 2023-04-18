import { Module } from '@nestjs/common';
import { AlbumsModule } from './albums/albums.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './albums/albums.entity';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './review/reviews.module';
import { Review } from './review/reviews.entity';

@Module({
  imports: [
    UsersModule,
    AlbumsModule,
    ReviewsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'post1983',
      database: 'selecta',
      entities: [Album, User, Review],
      synchronize: true,
      migrations:[]
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
