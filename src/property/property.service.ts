import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyResponse } from './propety.response';

@Injectable()
export class PropertyService {
  private readonly prismaService: PrismaService;

  public constructor(
    prismaService: PrismaService,
  ) {
    this.prismaService = prismaService
  }

  getProperties(): Promise<PropertyResponse[]> {
    return this.prismaService.property.findMany().then(properties => properties.map(property => PropertyResponse.fromEntity(property)));
  }

  getProperty(): string {
    return 'This action returns a property';
  }

  createProperty(): string {
    return 'This action creates a property';
  }
}
