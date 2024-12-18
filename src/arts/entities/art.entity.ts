import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Art extends Document{

    @Prop({
        unique:true,
        index:true
    })

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop()
    stock: number;

    @Prop()
    imageUrl: string;

    @Prop({type:Date,default:Date.now})
    createAt: string;

}

export const ArtSchema = SchemaFactory.createForClass( Art );