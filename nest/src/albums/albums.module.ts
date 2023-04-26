import { Module } from '@nestjs/common';
import { Album } from './albums.entity';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module ({
    controllers: [AlbumsController],
    providers: [AlbumsService],
    imports: [TypeOrmModule.forFeature([Album])],
    exports: [TypeOrmModule]
})

export class AlbumsModule { };