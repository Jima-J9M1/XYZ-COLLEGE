import { DataSource } from "typeorm";
import { Student } from "./Model/StudentEntity";
import { Course } from "./Model/CoureEntity";
import { Enrollment } from "./Model/EnrollementEntity";
import { Grade } from "./Model/GradeEntity";

export const AppDataSource = new DataSource({
    type:'postgres',
    host:"localhost",
    port: 5432,
    username:"pguser",
    password:"1234567",
    database:"college",
    synchronize:true,
    logging:true,
    entities:[Student, Course, Enrollment, Grade],
    subscribers:[],
    migrations:[],
})

console.log("connect");