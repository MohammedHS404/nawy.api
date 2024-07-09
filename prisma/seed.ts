import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const types = ['Apartment', 'Villa', 'TwinHouse', 'TownHouse', 'Duplex', 'Penthouse', 'Chalet', 'Studio', 'Cabin', 'Clinic', 'Office', 'Retail'];

    console.log('Seeding property types...')

    await prisma.propertyType.createMany({
        data: types.map((type) => ({ name: type }))
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })