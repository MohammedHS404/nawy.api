import { Module } from '@nestjs/common';
import { PropertyTypeService } from './business/property-type.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyTypeController } from './api/property-type.controller';

@Module({
    providers: [PropertyTypeService, PrismaService],
    controllers: [PropertyTypeController],
    exports: [PropertyTypeService]
})
export class PropertyTypeModule { }
