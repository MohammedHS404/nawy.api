import { Property } from "@prisma/client";

export class PropertyResponse {
    id: number
    type: string
    createdAt: Date
    updatedAt?: Date
    title: string
    slug: string
    description: string
    shortDescription?: string
    minPrice?: number
    maxPrice?: number
    location_lat?: number
    location_lon?: number
    address_city?: string
    address_state?: string
    address_country?: string
    bedrooms?: number
    bathrooms?: number
    minArea?: number
    maxArea?: number

    public constructor(params: {
        id: number
        type: string
        title: string
        slug: string
        description: string
        shortDescription?: string
        minPrice?: number
        maxPrice?: number
        location_lat?: number
        location_lon?: number
        address_city?: string
        address_state?: string
        address_country?: string
        bedrooms?: number
        bathrooms?: number
        minArea?: number
        maxArea?: number
    }) {
    }

    public static fromEntity(entity: Property): PropertyResponse {
        return new PropertyResponse({
            id: entity.id,
            title: entity.title,
            description: entity.description,
            type: entity.type,
            slug: entity.slug,
            shortDescription: entity.shortDescription,
            minPrice: entity.minPrice.toNumber(),
            maxPrice: entity.maxPrice.toNumber(),
            location_lat: entity.location_lat.toNumber(),
            location_lon: entity.location_lon.toNumber(),
            address_city: entity.address_city,
            address_state: entity.address_state,
            address_country: entity.address_country,
            bedrooms: entity.bedrooms,
            bathrooms: entity.bathrooms,
            minArea: entity.minArea,
            maxArea: entity.maxArea
        });
    }

}