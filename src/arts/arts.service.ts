import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { CreateArtDto } from './dto/create-art.dto';
import { Art } from './entities/art.entity';
import { UpdateArtDto } from './dto/update-art.dto';

@Injectable()
export class ArtsService {

    constructor(
        @InjectModel(Art.name)
        private artModel: Model<Art>
    ) { }

    public async findAll() {
        return await this.artModel.find();
    }

    public async findById(id: string) {
        let art: Art;

        if (isValidObjectId(id)) {
            art = await this.artModel.findById(id)
        }


        if (!art) throw new NotFoundException(`Art with id '${id}' not found`);
        return art;
    }

    public async create(createArtDto: CreateArtDto) {

        return this.handleExceptions(async () => {
            const art = await this.artModel.create(createArtDto);

            return art;
        });
    }

    public async update(id: string, updateArtDto: UpdateArtDto) {
        const art = await this.findById(id);
        return this.handleExceptions(async () => {
            await art.updateOne(updateArtDto);

            return { ...art.toJSON(), ...updateArtDto };
        });
    }

    public async delete(id: string) {
        const {deletedCount} = await this.artModel.deleteOne({ _id: id });
        if(deletedCount === 0) throw new BadRequestException(`Art with id '${id}' not found`);
        return;
    }

    private async handleExceptions(code: () => any) {
        try {
            return await code();
        } catch (err) {
            if (err.code === 11000) {
                throw new BadRequestException({
                    message: `Art with the same ${Object.keys(err.keyValue)} already exists`,
                    keyValues: (err.keyValue)
                })
            }
            throw new InternalServerErrorException("Cant Create Art - Check Server Logs")
        }
    }


}
