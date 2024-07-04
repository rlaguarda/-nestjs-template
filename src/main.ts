import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import otelSDK from './tracing';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
  .setTitle('Nestjs API Template')
  .setDescription('TIBA Nestjs API Template')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'method',

      // operationsSorter: 'alpha',
      // defaultModelsExpandDepth: -1,
    },
  });
  await otelSDK.start();
  app.enableCors();
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}
bootstrap();
