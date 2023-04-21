import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { Album } from "./albums.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAlbumDto } from "./create-album.dto";
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class AlbumsService {
    constructor( 
        @InjectRepository(Album)
        private albumsRepository: Repository<Album>
    ) {}

    findAll() {
        return this.albumsRepository.find();
    }

    findOne(id: number) {
        return this.albumsRepository.findOneBy({albumId: id});
    }

    async create(createAlbumDto : CreateAlbumDto, image: Express.Multer.File) {
        const album = new Album();

        const filename = `${new Date().getTime()}-${image.originalname}`;
        const filepath = path.join(__dirname,'..','..','uploads', filename);
        await fs.promises.writeFile(filepath, image.buffer);

        album.author = createAlbumDto.Author;
        album.name = createAlbumDto.Name;
        album.image = filepath;

        await this.albumsRepository.save(album);

        return album;
    }

    async remove(id:number) {
        await this.albumsRepository.delete(id);
    }
}