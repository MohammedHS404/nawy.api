import { Module } from '@nestjs/common';
import { MediaService } from './business/media.service';
import { MediaController } from './api/controllers/media.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [MediaService, PrismaService],
  controllers: [MediaController]
})
export class MediaModule {}
