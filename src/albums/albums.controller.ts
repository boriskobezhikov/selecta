import { AlbumsService } from "./albums.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Album } from "./albums.entity";
import { CreateAlbumDto } from "./create-album.dto";

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {};

    @Get()
    
    findAll() {
        return this.albumsService.findAll();
    }
    @Get() 
    findOne(@Param('id') id: string) {
        return this.albumsService.findOne(+id);
    }
    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.albumsService.remove(+id);
    }
    @Post()
    create(@Body() createAlbumDto : CreateAlbumDto) {
        return this.albumsService.create(createAlbumDto);
    }
}

