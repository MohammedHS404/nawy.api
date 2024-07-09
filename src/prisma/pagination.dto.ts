import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsOptional, Min } from "class-validator";

export class PaginationDto {
    @ApiProperty({ default: 1 })
    @Min(1)
    public page: number = 1;
    @ApiProperty({ default: 10 })
    @Min(1)
    public limit: number = 10;
    @ApiProperty({ default: 'id' })
    @IsOptional()
    public sortBy?: string = 'id';
    @ApiProperty({ enum: ['asc', 'desc'], default: 'asc' })
    @IsOptional()
    public sortOrder?: Prisma.SortOrder = 'asc';

    public constructor(
        page?: number,
        limit?: number,
        sortBy?: string,
        sortOrder?: Prisma.SortOrder
    ) {
        this.page = page ?? this.page;
        this.limit = limit ?? this.limit;
        this.sortBy = sortBy ?? this.sortBy;
        this.sortOrder = sortOrder ?? this.sortOrder;
    }

    public toPrismaPagination(): {
        orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[]
        skip?: number
        take?: number
    } {
        return {
            orderBy: {
                id: "asc"
            },
            skip: (this.page - 1) * this.limit,
            take: this.limit
        }
    }
}