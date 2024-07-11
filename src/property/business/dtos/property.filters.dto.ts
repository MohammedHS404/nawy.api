import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsOptional, Min } from "class-validator";

export class PropertyFiltersDto {
    @ApiProperty()
    @IsOptional()
    public query?: string;

    @ApiProperty()
    @IsOptional()
    public type?: string;

    @ApiProperty()
    @IsOptional()
    public minPrice?: number;

    @ApiProperty()
    @IsOptional()
    public maxPrice?: number;

    @ApiProperty()
    @IsOptional()
    public minBedrooms?: number;

    @ApiProperty()
    @IsOptional()
    public maxBedrooms?: number;

    @ApiProperty()
    @IsOptional()
    public minBathrooms?: number;

    @ApiProperty()
    @IsOptional()
    public maxBathrooms?: number;

    @ApiProperty()
    @IsOptional()
    public minArea?: number;

    @ApiProperty()
    @IsOptional()
    public maxArea?: number;

    public toWhereInput(): Prisma.PropertyWhereInput {
        const where: Prisma.PropertyWhereInput = {};
        if (this.type) {
            where.PropertyType = {
                name: {
                    equals: this.type
                }
            }
        }

        if (this.minPrice) {
            where.minPrice = {
                gte: this.minPrice
            }
        }

        if (this.maxPrice) {
            where.maxPrice = {
                lte: this.maxPrice
            }
        }

        if (this.minBedrooms) {
            where.bedrooms = {
                gte: this.minBedrooms
            }
        }

        if (this.maxBedrooms) {
            where.bedrooms = {
                lte: this.maxBedrooms
            }
        }

        if (this.minBathrooms) {
            where.bathrooms = {
                gte: this.minBathrooms
            }
        }

        if (this.maxBathrooms) {
            where.bathrooms = {
                lte: this.maxBathrooms
            }
        }

        if (this.minArea) {
            where.minArea = {
                gte: this.minArea
            }
        }

        if (this.maxArea) {
            where.maxArea = {
                lte: this.maxArea
            }
        }

        if (this.query) {
            where.OR = [
                {
                    address_city: {
                        contains: this.query
                    }
                },
                {
                    address_country: {
                        contains: this.query
                    }
                },
                {
                    address_state: {
                        contains: this.query
                    }
                },
                {
                    description: {
                        contains: this.query
                    }
                },
                {
                    title: {
                        contains: this.query
                    }
                },
                {
                    PropertyType: {
                        name: {
                            contains: this.query
                        }
                    }
                }
            ]
        }

        return where;
    }
}