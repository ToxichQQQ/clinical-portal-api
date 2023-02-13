import { Injectable } from '@nestjs/common';
import {Doctor} from "./doctors.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateDoctorDto} from "../dto/create-doctor.dto";

@Injectable()
export class DoctorsService {

    constructor(@InjectModel(Doctor) private doctorRepository: typeof Doctor) {
    }

    async createDoctor(dto: CreateDoctorDto){
            const doctor = await this.doctorRepository.create(dto)

            return doctor;
    }

    async getAllDoctors(){
        const doctors = await this.doctorRepository.findAll()

        return doctors
    }
}
