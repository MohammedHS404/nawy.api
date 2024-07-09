import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';
import { PropertyTypeController } from './property-type/api/property-type.controller';
import { PropertyTypeService } from './property-type/business/property-type.service';
import { PropertyTypeModule } from './property-type/property-type.module';
import { PrismaService } from './prisma/prisma.service';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PropertyModule,
    PropertyTypeModule,
    MediaModule,
  ],
  providers: [PropertyTypeService,PrismaService],
  controllers: [PropertyTypeController],
})
export class AppModule { }
