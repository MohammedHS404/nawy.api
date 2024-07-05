import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const envFilePath = `config/${process.env.NODE_ENV === 'production' ? '.production.env' : '.development.env'}`;

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: envFilePath
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
