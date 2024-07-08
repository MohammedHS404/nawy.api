import { Controller, Get, Post } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  private readonly propertyService: PropertyService;

  constructor(propertyService: PropertyService) {
    this.propertyService = propertyService;
  }

  @Get()
  getProperties(): string {
    return this.propertyService.getProperties();
  }

  @Get('/:id')
  getProperty(): string {
    return this.propertyService.getProperty();
  }

  @Post('/create')
  createProperty(): string {
    return this.propertyService.createProperty();
  }
}
