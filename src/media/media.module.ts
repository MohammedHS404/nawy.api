import { Module } from '@nestjs/common';
import { MediaController } from './api/controllers/media.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MediaService } from './business/services/media.service';

@Module({
  providers: [MediaService],
  controllers: [MediaController],
  imports: [PrismaModule],
})
export class MediaModule { }
