import { Media } from "@prisma/client";

export class MediaResponse {
    public id: number;
    public url: string;

    public constructor(params: { id: number, url: string; }) {
        this.url = params.url;
        this.id = params.id;
    }

    public static fromEntity(entity: Media): MediaResponse {
        return new MediaResponse({
            id: entity.id,
            url: entity.url,
        });
    }
}
