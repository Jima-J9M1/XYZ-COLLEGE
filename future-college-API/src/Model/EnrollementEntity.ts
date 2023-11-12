import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany, JoinColumn } from 'typeorm';
import { Student } from './StudentEntity';
import { Course } from './CoureEntity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Student, (student:Student) => student.enrollments)
  @JoinColumn()
  student: Student | undefined;

  @ManyToOne(() => Course, course => course.enrollments)
  @JoinColumn()
  course?: Course;

  
}
