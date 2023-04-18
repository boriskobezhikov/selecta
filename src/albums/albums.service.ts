import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { Album } from "./albums.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAlbumDto } from "./create-album.dto";

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

    create(createAlbumDto : CreateAlbumDto) {
        const album = new Album();
        album.author = createAlbumDto.Author;
        album.name = createAlbumDto.Name;

        return this.albumsRepository.save(album);
    }
    async remove(id:number) {
        await this.albumsRepository.delete(id);
    }
}