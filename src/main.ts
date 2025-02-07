import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // transform:true,
      // transformOptions:{
      //   enableImplicitConversion:true
      // }
    })
  )

  await app.listen(process.env.PORT);
  console.log("Server Running On Port ",process.env.PORT);
  
}
main();
