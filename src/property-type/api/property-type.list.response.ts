import { PropertyType } from "@prisma/client";

export class PropertyTypeResponse {
    public id: number;
    public name: string;

    public constructor(params: {
        id: number
        name: string
    }) {
        this.id = params.id;
        this.name = params.name;
    }

    public static fromEntity(entity: PropertyType): PropertyTypeResponse {
        return new PropertyTypeResponse({
            id: entity.id,
            name: entity.name
        });
    }
}