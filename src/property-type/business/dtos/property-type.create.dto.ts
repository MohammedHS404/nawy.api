import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePropertyTypeDto {
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The name of the property type' })
    public name: string

    public constructor(params: {
        name: string
    }) {
        this.name = params.name;
    }
}