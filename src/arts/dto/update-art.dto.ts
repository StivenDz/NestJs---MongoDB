import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateArtDto{

    @IsString()
    @IsOptional()
    readonly name?:        string;

    @IsString()
    @IsOptional()
    readonly description?: string;

    @IsNumber()
    @IsOptional()
    readonly price?:       number;

    @IsNumber()
    @IsOptional()
    readonly stock?:       number;

    @IsString()
    @IsOptional()
    readonly imageUrl?:    string;
}