import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Media, Prisma } from '@prisma/client';
import { CreatePropertyDto } from './property.create.dto';
import { PropertyListOptionsDto } from './property.list.options.dto';

@Injectable()
export class PropertyService {
  private readonly prismaService: PrismaService;

  public constructor(
    prismaService: PrismaService,
  ) {
    this.prismaService = prismaService
  }

  async getProperties(options: PropertyListOptionsDto): Promise<Prisma.PropertyGetPayload<{ include: { PropertyImages, PropertyPlans, PropertyType } }>[]> {
    const findManyArgs: Prisma.PropertyFindManyArgs = options.ToFindManyArgs();

    console.log(findManyArgs);

    const properties = await this.prismaService.property.findMany({
      include: {
        PropertyType: true,
        PropertyImages: {
          include: {
            media: true
          }
        },
        PropertyPlans: {
          include: {
            media: true
          }
        }
      },
      ...findManyArgs
    });

    return properties;
  }

  getProperty(): string {
    return 'This action returns a property';
  }

  async createProperty(newProperty: CreatePropertyDto): Promise<Prisma.PropertyGetPayload<{ include: { PropertyImages, PropertyPlans, PropertyType } }>> {
    const property = await this.prismaService.$transaction(async (prisma) => {

      const propertyImagesInput: Prisma.PropertyImageCreateManyPropertyInput[] =
        newProperty.imageMediaIds?.map((id) => ({
          mediaId: id
        })) ?? [];

      const propertyPlansInput: Prisma.PropertyPlansCreateManyPropertyInput[] =
        newProperty.planMediaIds?.map((id) => ({
          mediaId: id
        })) ?? [];

      const entity = await prisma.property.create({
        data: {
          slug: '',
          PropertyType: {
            connect: {
              name: newProperty.type
            }
          },
          title: newProperty.title,
          description: newProperty.description,
          shortDescription: newProperty.shortDescription,
          minPrice: newProperty.minPrice,
          maxPrice: newProperty.maxPrice,
          location_lat: newProperty.location_lat,
          location_lon: newProperty.location_lon,
          address_city: newProperty.address_city,
          address_state: newProperty.address_state,
          address_country: newProperty.address_country,
          bedrooms: newProperty.bedrooms,
          bathrooms: newProperty.bathrooms,
          minArea: newProperty.minArea,
          maxArea: newProperty.maxArea,
          PropertyImages: {
            createMany: {
              data: propertyImagesInput
            }
          },
          PropertyPlans: {
            createMany: {
              data: propertyPlansInput
            }
          },
        }
      });

      // Generate the slug using the actual id
      const slug = this.generateSlug(entity.id, entity.title);

      // Update the entity with the final slug
      const updatedEntity = await prisma.property.update({
        include: {
          PropertyImages: true,
          PropertyPlans: true,
          PropertyType: true
        },
        where: { id: entity.id },
        data: { slug: slug },
      });

      return updatedEntity;
    });


    return property;
  }

  generateSlug(id, title) {
    let slug = title.toLowerCase();
    slug = slug.replace(/[^a-z0-9]+/g, '-');
    slug = slug.replace(/^-+|-+$/g, '');
    slug = `${slug}-${id}`;
    return slug;
  }
}
