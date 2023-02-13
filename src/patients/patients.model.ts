import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface PatientCreateAttrs{
    email: string;
    password: string
    fullName: string
    phone: string;
    birthDate: string
    sex: string;
    address: string
}

@Table({tableName: 'patients'})
export class Patient extends Model<Patient, PatientCreateAttrs> {
    @ApiProperty({example: 1, description:'Doctor unique id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'patient.example@gmail.com', description:'Email example'})
    @Column({ type: DataType.STRING, unique: true, allowNull: true})
    email:string

    @ApiProperty({example: '123456789', description:'Patient\'s password'})
    @Column({ type: DataType.STRING, allowNull: true})
    password: string

    @ApiProperty({example: 'Alex Wood', description:'Patient\'s name'})
    @Column({ type: DataType.STRING, allowNull: true})
    fullName: string

    @ApiProperty({example: 'male', description:'Gender'})
    @Column({ type: DataType.STRING, allowNull: true})
    sex: string

    @ApiProperty({example: '89287090376', description:'Phone number'})
    @Column({ type: DataType.STRING, allowNull: true})
    phone: string

    @ApiProperty({example: 'New Island, Puskina Street', description:'Patient address'})
    @Column({ type: DataType.STRING, allowNull: true})
    address: string

    @ApiProperty({example: '20/11/2000', description:'Patient birthDate'})
    @Column({ type: DataType.STRING, allowNull: true})
    birthDate: string
}