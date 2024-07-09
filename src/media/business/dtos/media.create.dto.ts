import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMediaDto {
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The url of the media' })
    public url: string;
}
