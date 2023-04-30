import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors( {
    origin: [
      'http://localhost:3000',
      'http://localhost:5000'
    ]
  });
  const options = new DocumentBuilder()
    .setTitle('Selecta API')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  
    await app.listen(5000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();