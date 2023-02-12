import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateDoctorDto} from "./dto/create-doctor.dto";
import {DoctorsService} from "./doctors.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Doctor} from "./doctors.model";

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorsController {

    constructor(private doctorsService: DoctorsService) {

    }

    @ApiOperation({summary:'Create new doctor'})
    @ApiResponse({status:200, type: Doctor})
    @Post()
    create(@Body() doctorDto: CreateDoctorDto){
         return this.doctorsService.createDoctor(doctorDto)
    }


    @ApiOperation({summary:'Get all doctors'})
    @ApiResponse({status:200, type: [Doctor]})
    @Get()
    getAllDoctors(){
        return this.doctorsService.getAllDoctors()
    }
}
