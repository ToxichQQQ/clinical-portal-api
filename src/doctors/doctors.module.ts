import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Doctor} from "./doctors.model";
import {Patient} from "../patients/patients.model";
import {DoctorsPatients} from "./doctors-patients.model";

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports:[
      SequelizeModule.forFeature([Doctor, Patient, DoctorsPatients])
  ]
})
export class DoctorsModule {}
