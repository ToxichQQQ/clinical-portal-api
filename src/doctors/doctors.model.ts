import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Patient} from "../patients/patients.model";
import {DoctorsPatients} from "./doctors-patients.model";

interface DoctorCreationAttrs {
    email:string
    password: string
    fullName: string
    sex: string
    phone: string
}


@Table({tableName: 'doctors'})
export class Doctor extends Model<Doctor,DoctorCreationAttrs> {
    @ApiProperty({example: 1, description:'Doctor unique id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'doctor.example@gmail.com', description:'Email example'})
    @Column({ type: DataType.STRING, unique: true, allowNull: true})
    email:string

    @ApiProperty({example: '123456789', description:'Doctor\'s password'})
    @Column({ type: DataType.STRING, allowNull: true})
    password: string

    @ApiProperty({example: 'Alex Wood', description:'Doctor\'s name'})
    @Column({ type: DataType.STRING, allowNull: true})
    fullName: string

    @ApiProperty({example: 'male', description:'Gender'})
    @Column({ type: DataType.STRING, allowNull: true})
    sex: string

    @ApiProperty({example: '89287090376', description:'Phone number'})
    @Column({ type: DataType.STRING, allowNull: true})
    phone: string

    @ApiProperty({example: 'pediatrician', description:'Specialization'})
    @Column({ type: DataType.STRING, allowNull: true})
    specialization: string

    @ApiProperty({example: '20/11/1990', description:'Start work date'})
    @Column({ type: DataType.STRING, allowNull: true})
    startWorkDate: string

    @BelongsToMany(() => Patient, () => DoctorsPatients)
    patients: Patient[]
}