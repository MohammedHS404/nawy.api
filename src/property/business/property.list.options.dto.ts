import { PaginationDto } from "src/prisma/pagination.dto";
import { PropertyFiltersDto } from "./property.filters.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Prisma } from "@prisma/client";

export class PropertyListOptionsDto {
    @ApiProperty()
    @IsOptional()
    public pagination?: PaginationDto;
    @ApiProperty()
    @IsOptional()
    public filters?: PropertyFiltersDto;

    public ToFindManyArgs(): Prisma.PropertyFindManyArgs {
        let all: Prisma.PropertyFindManyArgs = {};

        if (this.filters) {
            all = { ...all, where: this.filters.toWhereInput() };
        }

        if (this.pagination) {
            all = { ...all, ...this.pagination.toPrismaPagination() };
        }

        return all;
    }
}