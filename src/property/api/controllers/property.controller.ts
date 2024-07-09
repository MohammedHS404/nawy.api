import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PropertyService } from '../../business/services/property.service';
import { PropertyResponse } from '../responseModels/propety.list.response';
import { CreatePropertyDto as CreatePropertyDto } from '../../business/dtos/property.create.dto';
import { Prisma } from '@prisma/client';
import { PropertyTypeService } from 'src/property-type/business/services/property-type.service';
import { ApiTags } from '@nestjs/swagger';
import { PropertyListOptionsDto } from 'src/property/business/dtos/property.list.options.dto';

@Controller('property')
@ApiTags('property')
export class PropertyController {
  private readonly _propertyService: PropertyService;
  private readonly _propertyTypeService: PropertyTypeService;

  constructor(propertyService: PropertyService, propertyTypeService: PropertyTypeService) {
    this._propertyService = propertyService;
    this._propertyTypeService = propertyTypeService;
  }

  @Post("/list")
  async getProperties(@Body() options?: PropertyListOptionsDto): Promise<PropertyResponse[]> {
    const properties = await this._propertyService.getProperties(options);
    const propertyResponses = properties.map(property => PropertyResponse.fromEntity(property));
    return propertyResponses;
  }

  @Get('/:id')
  getProperty(): string {
    return this._propertyService.getProperty();
  }

  @Post('/create')
  async createProperty(@Body() request: CreatePropertyDto): Promise<PropertyResponse> {
    const propertyType = await this._propertyTypeService.getByName(request.type);

    if (!propertyType) {
      throw new BadRequestException('Property type not found');
    }

    const property: Prisma.PropertyGetPayload<{ include: { PropertyImages, PropertyPlans, PropertyType } }> = await this._propertyService.createProperty(request);

    return PropertyResponse.fromEntity(property);
  }
}
