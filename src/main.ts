import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const logger = new Logger('Bootstrap');

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  })

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  if (process.env.NODE_ENV !== 'production'){
    const config = new DocumentBuilder()
          .setTitle('Fractal Rest API')
          .setDescription('Developed by Lorenzo Navarro')
          .setVersion('1.0')
          .build()
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api/v1',app,document);
  }

  await app.listen(process.env.PORT || 3001)
  console.log(`API documentation running on http://localhost:${process.env.PORT || 3001}/api/v1`)

}
bootstrap();
