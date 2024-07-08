import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PropertyModule } from './property/property.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PropertyModule,
  ],
  providers: [PrismaService],
})
export class AppModule { }
