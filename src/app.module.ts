import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';
import { PropertyTypeController } from './property-type/api/controllers/property-type.controller';
import { PropertyTypeService } from './property-type/business/services/property-type.service';
import { PropertyTypeModule } from './property-type/property-type.module';
import { MediaModule } from './media/media.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PropertyModule,
    PropertyTypeModule,
    MediaModule,
    PrismaModule,
  ],
  providers: [PropertyTypeService],
  controllers: [PropertyTypeController],
})
export class AppModule { }
