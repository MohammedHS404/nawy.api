import { Injectable } from '@nestjs/common';
import { Media } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediaService {
    private readonly _prismaService: PrismaService;

    public constructor(prismaService: PrismaService) {
        this._prismaService = prismaService;
    }

    public async createMedia(url: string): Promise<Media> {
        return this._prismaService.media.create({
            data: {
                url: url
            }
        });
    }
}
