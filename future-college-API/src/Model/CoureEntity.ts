import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany } from "typeorm";
import { Student } from "./StudentEntity";
import { Grade } from "./GradeEntity";
import { Enrollment } from "./EnrollementEntity";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    course_id?:number

    @Column("text")
    title?: string

    @Column('text')
    description?: string

    @Column()
    credit_hour?:string 

    @Column('text')
    term?: string

    @ManyToMany(() => Student, (student) => student.courses)
    @JoinColumn()
    students?:Student[]

    @OneToMany(() => Grade, grade => grade.course)
    grades?: Grade[]

    @OneToMany(() => Enrollment, enrollment => enrollment.course)
    enrollments?: Enrollment[]
}