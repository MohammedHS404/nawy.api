import { Module } from '@nestjs/common';
import { PropertyController } from './api/controllers/property.controller';
import { PropertyService } from './business/property.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyTypeModule } from 'src/property-type/property-type.module';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService, PrismaService],
  imports: [PropertyTypeModule]
})
export class PropertyModule { }
