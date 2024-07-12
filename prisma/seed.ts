import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises'; // Using fs.promises for async file operations
import { PropertyToSeed } from './propertyToSeed';

const prisma = new PrismaClient();

async function main() {
    try {
        const getExistingTypes = await prisma.propertyType.findMany();

        if (getExistingTypes.length > 0) {
            console.log('Already seeded!');
            return;
        }

        const types = ['Apartment', 'Villa', 'TwinHouse', 'TownHouse', 'Duplex', 'Penthouse', 'Chalet', 'Studio', 'Cabin', 'Clinic', 'Office', 'Retail'];

        console.log('Seeding property types...')

        // Loop through each type and upsert it in the database

        for (const type of types) {
            await prisma.propertyType.upsert({
                where: {
                    name: type
                },
                update: {},
                create: {
                    name: type
                }
            });
        }

        console.log('Property types seeded successfully!');

        console.log('Seeding properties...');

        // Read JSON data from file
        const jsonData = await readFile('prisma/properties.json', 'utf-8');
        const properties: PropertyToSeed[] = JSON.parse(jsonData);

        console.log('Seeding properties...');

        // Loop through each property and create it in the database
        for (const item of properties) {
            const itemType = item.property_type.name;
            if (itemType == "Twinhouse") {
                item.property_type.name = "TwinHouse";
            } else if (itemType == "Townhouse") {
                item.property_type.name = "TownHouse";
            }
            const imageMedias = await Promise.all(item.images.map(image => prisma.media.create({ data: { url: image.image_path } })));
            const planMedias = await Promise.all(item.floor_plans.map(plan => prisma.media.create({ data: { url: plan.image_path } })));
            await prisma.property.create({
                data: {
                    title: item.name,
                    slug: item.slug,
                    description: item.description,
                    shortDescription: item.one_line_description,
                    createdAt: new Date(item.created_at),
                    updatedAt: new Date(item.updated_at),
                    PropertyType: {
                        connect: {
                            name: item.property_type.name
                        }
                    },
                    address_country: "Egypt",
                    address_state: "Cairo",
                    minPrice: item.min_price,
                    maxPrice: item.max_price,
                    location_lat: item.compound.lat,
                    location_lon: item.compound.long,
                    address_city: item.compound.area.name,
                    bedrooms: item.number_of_bedrooms,
                    bathrooms: item.number_of_bathrooms,
                    minArea: item.min_unit_area,
                    maxArea: item.max_unit_area,
                    PropertyImages: {
                        createMany: {
                            data: imageMedias.map(media => ({ mediaId: media.id })),
                        },
                    },
                    PropertyPlans: {
                        createMany: {
                            data: planMedias.map(media => ({ mediaId: media.id }))
                        }
                    },
                    // More fields can be mapped accordingly
                }
            });
        }

        console.log('Properties seeded successfully!');
    } catch (e) {
        console.error('Error seeding properties:', e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
