import { Module } from '@nestjs/common';
import { PropertyTypeService } from './business/services/property-type.service';
import { PropertyTypeController } from './api/controllers/property-type.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    providers: [PropertyTypeService],
    controllers: [PropertyTypeController],
    exports: [PropertyTypeService],
    imports: [PrismaModule]
})
export class PropertyTypeModule { }
