import { Body, Controller, Post } from '@nestjs/common';
import { MediaService } from '../../business/media.service';
import { CreateMediaDto } from '../../business/media.create.dto';
import { MediaResponse } from '../responseModels/media.response';
import { ApiTags } from '@nestjs/swagger';

@Controller('media')
@ApiTags('media')
export class MediaController {
    private readonly _mediaService: MediaService;

    public constructor(
        mediaService: MediaService,
    ) {
        this._mediaService = mediaService;
    }

    @Post("/create")
    public async create(@Body() request: CreateMediaDto): Promise<MediaResponse> {
        const media = await this._mediaService.createMedia(request.url);

        return MediaResponse.fromEntity(media);
    }
}