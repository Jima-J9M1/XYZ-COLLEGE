import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./CoureEntity";
import { Grade } from "./GradeEntity";
import { Enrollment } from "./EnrollementEntity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column("text")
    
    name?: string

    @Column("text")
    email?: string

    @Column("text")

    phone?: string     
    @Column("float")
    academic_record?: number

    @ManyToMany(() => Course, (course) => course.students)
    @JoinColumn()
    courses?:Course[]

   @OneToMany(() => Grade, grade => grade.student)
   @JoinColumn()
   grades?: Grade[]

   @OneToMany(() => Enrollment, enrollment => enrollment.student)
   @JoinColumn()
   enrollments?: Enrollment[]

}