import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyType } from '@prisma/client';

@Injectable()
export class PropertyTypeService {
    private readonly _prismaService: PrismaService;

    public constructor(prismaService: PrismaService) {
        this._prismaService = prismaService;
    }

    public getAll(): Promise<PropertyType[]> {
        return this._prismaService.propertyType.findMany({
            orderBy: {
                name: 'asc'
            }
        });
    }

    public getByName(name: string): Promise<PropertyType | null> {
        return this._prismaService.propertyType.findUnique({
            where: {
                name: name,
            }
        });
    }
}
