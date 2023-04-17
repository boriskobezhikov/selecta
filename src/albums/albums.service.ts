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
        return this.albumsRepository.findOneBy({id});
    }

    create(createAlbumDto : CreateAlbumDto) {
        const album = new Album();
        album.Author = createAlbumDto.Author;
        album.Name = createAlbumDto.Name;

        return this.albumsRepository.save(album);
    }
    async remove(id:number) {
        await this.albumsRepository.delete(id);
    }

    
/**findAll() {
    this.datasourceService.getAlbums();
}

constructor(private readonly datasourceService: DatasourceService) {}

create(album: Album) {
    this.datasourceService.getAlbums().push(album);
}

findOne(id:number) {
    return this.datasourceService.getAlbums().find((album) => album.id === id);
}

update(id:number, updatedAlbum: Album) {
    const index = this.datasourceService
    .getAlbums()
    .findIndex((album) => album.id === id);
    this.datasourceService.getAlbums()[index] = updatedAlbum;
    return this.datasourceService.getAlbums()[index];
}

remove(id: number) {
    const index = this.datasourceService
    .getAlbums()
    .findIndex((album) => album.id === id);
    this.datasourceService.getAlbums().splice(index,1);
    return HttpStatus.OK;
}**/
}