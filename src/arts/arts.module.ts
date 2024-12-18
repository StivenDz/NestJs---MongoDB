import { Module } from '@nestjs/common';
import { ArtsController } from './arts.controller';
import { ArtsService } from './arts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Art, ArtSchema } from './entities/art.entity';

@Module({
    controllers:[ArtsController],
    providers:[ArtsService],
    imports:[MongooseModule.forFeature([
        {
            name: Art.name,
            schema:ArtSchema
        }
    ])]
})
export class ArtsModule {}
