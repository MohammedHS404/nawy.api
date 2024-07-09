import { ApiProperty } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsNotEmpty, IsOptional, Max, MaxLength, Min } from "class-validator";

export class CreatePropertyDto {
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The type of the property' })
    type: string;

    @IsNotEmpty()
    @MaxLength(500)
    @ApiProperty({ required: true, description: 'The title of the property', maxLength: 500 })
    title: string;

    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The description of the property' })
    description: string;

    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The short description of the property' })
    shortDescription: string;

    @Min(0.001)
    @Max(99999999.999)
    @ApiProperty({ required: true, description: 'The minimum price of the property', minimum: 0.001, maximum: 99999999.999 })
    minPrice: number;

    @Min(0.001)
    @Max(99999999.999)
    @ApiProperty({ required: true, description: 'The maximum price of the property', minimum: 0.001, maximum: 99999999.999 })
    maxPrice: number;


    @IsOptional()
    @IsLatitude({always:false})
    @ApiProperty({ required: false, description: 'The latitude of the property' })
    location_lat?: number;

    @IsOptional()
    @IsLongitude({always:false})
    @ApiProperty({ required: false, description: 'The longitude of the property' })
    location_lon?: number;

    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The address of the property' })
    address_city: string;

    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The state of the property' })
    address_state: string;

    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'The country of the property' })
    address_country: string;

    @Min(1)
    @Max(127)
    @ApiProperty({ required: true, description: 'The number of bedrooms in the property', minimum: 1, maximum: 127 })
    bedrooms: number;

    @Min(1)
    @Max(127)
    @ApiProperty({ required: true, description: 'The number of bathrooms in the property', minimum: 1, maximum: 127 })
    bathrooms: number;

    @Min(1)
    @Max(100000000)
    @ApiProperty({ required: true, description: 'The minimum area of the property', minimum: 1, maximum: 100000000 })
    minArea: number;

    @Min(1)
    @Max(100000000)
    @ApiProperty({ required: true, description: 'The maximum area of the property', minimum: 1, maximum: 100000000 })
    maxArea: number;

    @ApiProperty({ required: false, description: 'The media ids of the property images' })
    imageMediaIds?: number[]

    @ApiProperty({ required: false, description: 'The media ids of the property plans' })
    planMediaIds?: number[]
}