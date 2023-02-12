import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Clinical portal API documentation')
      .setDescription('An application for tracking the status of patients and a remote patient appointment')
      .setVersion('1.0.0')
      .addTag('')
      .build()

  const documentation = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs/', app, documentation)

  await app.listen(PORT);
}
start();
