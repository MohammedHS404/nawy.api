import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
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
  @HttpCode(200)
  async getProperties(@Body() options?: PropertyListOptionsDto): Promise<{
    totalCount: number,
    properties: PropertyResponse[]
  }> {
    const propertiesList = await this._propertyService.getProperties(options);
    const propertyResponses = propertiesList.properties.map(property => PropertyResponse.fromEntity(property));
    return {
      totalCount: propertiesList.totalCount,
      properties: propertyResponses
    }
  }

  @Get('/:slug')
  async getProperty(@Param() params: {slug:string}): Promise<PropertyResponse> {
    const property = await this._propertyService.getProperty(params.slug);

    return PropertyResponse.fromEntity(property);
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
