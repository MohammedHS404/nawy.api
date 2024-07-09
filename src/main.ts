import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { IncomingMessage, ServerResponse } from 'http';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }));

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Nawy')
    .setDescription('The Nawy API description')
    .setVersion('1.0')
    .addTag('nawy')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api', app, document);

  app.use((req: IncomingMessage, res: ServerResponse, next) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Healthy!');
    }
    next();
  });

  await app.listen(3000);
}

bootstrap();
