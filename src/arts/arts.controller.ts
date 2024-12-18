import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';

@Controller('arts')
export class ArtsController {

    constructor(
        private readonly artsService: ArtsService
    ) { }

    @Get()
    public getAllArts() {
        return this.artsService.findAll();
    }

    @Get(":id")
    public getArtById(@Param("id") id: string) {
        return this.artsService.findById(id);
    }


    // TODO: Handle Image File
    @Post()
    @HttpCode(HttpStatus.OK)
    public createArt(@Body() createArtDto: CreateArtDto) {
        return this.artsService.create(createArtDto);
    }

    // TODO: Handle Image File
    @Patch(":id")
    public updateArt(@Param("id", ParseMongoIdPipe) id: string, @Body() updateArtDto: UpdateArtDto) {
        return this.artsService.update(id, updateArtDto);
    }

    @Delete(":id")
    public deleteArtById(@Param("id", ParseMongoIdPipe) id: string) {
        return this.artsService.delete(id);
    }
}
