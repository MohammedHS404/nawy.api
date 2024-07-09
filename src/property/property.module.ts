import { Module } from '@nestjs/common';
import { PropertyController } from './api/controllers/property.controller';
import { PropertyService } from './business/services/property.service';
import { PropertyTypeModule } from 'src/property-type/property-type.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports: [PropertyTypeModule,PrismaModule],
})
export class PropertyModule { }
