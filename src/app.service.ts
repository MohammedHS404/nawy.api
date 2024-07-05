import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';

@Injectable()
export class AppService {
  private readonly _configService: ConfigService;
  
  public constructor(configService: ConfigService) {
    this._configService = configService;
  }

  getHello(): string {
    return `Hello World! ${this._configService.get<string>("DATABASE_USER")}`;
  }
}
