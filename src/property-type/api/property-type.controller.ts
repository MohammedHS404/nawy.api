import { Controller, Get } from '@nestjs/common';
import { PropertyTypeService } from '../business/property-type.service';
import { PropertyTypeResponse } from './property-type.list.response';
import { ApiTags } from '@nestjs/swagger';

@Controller('property-type')
@ApiTags('property-type')
export class PropertyTypeController {
    private readonly _propertyTypeService: PropertyTypeService;
    public constructor(
        propertyTypeService: PropertyTypeService,
    ) {
        this._propertyTypeService = propertyTypeService;
    }

    @Get()
    public async getAll(): Promise<PropertyTypeResponse[]> {
        const propertyTypes = await this._propertyTypeService.getAll();
        return propertyTypes.map(propertyType => PropertyTypeResponse.fromEntity(propertyType));
    }
}
