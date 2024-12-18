import { IsInt, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateArtDto{

    @IsString()
    @MinLength(2)
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    readonly price: number;

    @IsInt()
    @Min(1)
    readonly stock: number;

    @IsString()
    @IsOptional()
    readonly imageUrl: string;
}