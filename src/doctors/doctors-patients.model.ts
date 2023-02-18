import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Doctor} from "./doctors.model";
import {Patient} from "../patients/patients.model";

@Table({tableName:'doctors-patients', createdAt: false, updatedAt: false})
export class DoctorsPatients extends Model<DoctorsPatients> {

    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
    id: number

    @ForeignKey(() => Doctor)
    @Column({type: DataType.INTEGER})
    doctorId: number

    @ForeignKey(() => Patient)
    @Column({type: DataType.INTEGER})
    patientId: number
}