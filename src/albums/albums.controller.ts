import { AlbumsService } from "./albums.service";
import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors} from "@nestjs/common";
import { CreateAlbumDto } from "./create-album.dto";
import { ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {};

    @Get()
    findAll() {
        return this.albumsService.findAll();
    }
    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.albumsService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id') id:number) {
        return this.albumsService.remove(id);
    }
    @Post()
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createAlbumDto : CreateAlbumDto, @UploadedFile() image: Express.Multer.File) {
        return this.albumsService.create(createAlbumDto, image);
    }
}

