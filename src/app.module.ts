import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { DoctorsModule } from './doctors/doctors.module';
import {Doctor} from "./doctors/doctors.model";
import { PatientsModule } from './patients/patients.module';
import {Patient} from "./patients/patients.model";
import {DoctorsPatients} from "./doctors/doctors-patients.model";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports:[
      ConfigModule.forRoot({
        envFilePath:'.env'
      }),
    SequelizeModule.forRoot({
      dialect: 'postgres', // type of db
      host: process.env.POSTGRES_HOST, // host db
      port: Number(process.env.POSTGRES_PORT), // port db
      username: process.env.POSTGRES_USERNAME, // username for db
      password: process.env.POSTGRES_PASSWORD, // password for db
      database: process.env.POSTGRES_DB, // db name
      models: [Doctor, Patient, DoctorsPatients],
      autoLoadModels: true // for adding tables in db
    }),
    DoctorsModule,
    PatientsModule,
  ]
})
export class AppModule {}
