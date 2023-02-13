import {ApiProperty} from "@nestjs/swagger";
import {Column, DataType} from "sequelize-typescript";

export class CreateDoctorDto {
    @ApiProperty({example: 'doctor.example@gmail.com', description:'Email example'})
    readonly email: string;

    @ApiProperty({example: '123456789', description:'Doctor\'s password'})
    readonly password: string

    @ApiProperty({example: 'Alex Wood', description:'Doctor\'s name'})
    readonly fullName: string;

    @ApiProperty({example: 'male', description:'Gender'})
    readonly sex: string;

    @ApiProperty({example: '89287090376', description:'Phone number'})
    readonly phone: string
}