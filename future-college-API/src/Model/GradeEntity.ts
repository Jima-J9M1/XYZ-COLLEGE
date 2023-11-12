import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from './CoureEntity';
import { Student } from './StudentEntity';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id?: number

  @Column("text")
  grade?: string

  @ManyToOne(() => Course, (course) => course.grades)
  @JoinColumn()
  course?: Course;

  @ManyToOne(() => Student, (student:Student) => student.grades)
  @JoinColumn()
  student?: Student;
}