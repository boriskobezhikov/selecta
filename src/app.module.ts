import { Module } from '@nestjs/common';
import { AlbumsModule } from './albums/albums.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from './datasource/datasource.module';
import { Album } from './albums/albums.entity';

@Module({
  imports: [
    AlbumsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'post1983',
      database: 'selecta',
      entities: [Album],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
