import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Custom KEYS')
    .setDescription('The Custum key is the e-commerces app ')
    .setVersion('1.0')
    .addTag('Custom Keys')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 5001,() =>{
    console.log('listening on port' );
    console.log(process.env.PORT  );
  });
}
bootstrap();