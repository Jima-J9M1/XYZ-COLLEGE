import { Request, Response } from "express";
import { Course } from "../Model/CoureEntity";
import { Enrollment } from "../Model/EnrollementEntity";
import { Student } from "../Model/StudentEntity";
import { AppDataSource } from "../data-source";


const enrollmentEntity = AppDataSource.getRepository(Enrollment)
const studentEntity = AppDataSource.getRepository(Student)
const courseEntity = AppDataSource.getRepository(Course)

type enrollProps = {
    student:{},
    course: {}
}



export const enroll = async (req:Request, res:Response) =>{
    const enroll = new Enrollment()
    const u_id = parseInt(req.params.studentId)
    const c_id = parseInt(req.params.courseId)

    // console.log(u_id)
    const studentData = await studentEntity.findOneBy({
        id:u_id
    })
    
    const courseData = await courseEntity.findOneBy({
        course_id:c_id
    })
   console.log(courseData)
    if(!studentData || !courseData){
            return res.status(404).json({
                error: "Data not found"
            })
    }

    

    enroll.course = courseData
    enroll.student = studentData

    enrollmentEntity.save(enroll);

    return res.status(200).json(enroll);
}


export const getEnrolls = async (req:Request, res:Response) =>{
    const enrolls = await enrollmentEntity.find({
        relations:['course','student']
    });

    if(!enrolls){
        return res.status(404).json({
            error:"Data not found"
        })
    }

    return res.status(200).json(enrolls)
}


export const getEnrolledCoursesByStudent = async (req:Request, res:Response,) => {
       const s_id = parseInt(req.params.id)

       const enrolledCoursesByStudent = await enrollmentEntity.find({
           where: { student : {id: s_id}},
           relations: ['course'],
       })  
       
       if(enrolledCoursesByStudent.length === 0){
        return res.status(404).json({
            error:"No courses found"
        })
       }
       

       return res.status(200).json(enrolledCoursesByStudent);

}

export const getEnrolledStudentsWithCourse = async (req:Request, res:Response) => {
    const c_id = parseInt(req.params.id)
    const enrolledStudentsWithCourse = await enrollmentEntity.find({
        where: { course : {course_id: c_id}},
        relations: ['student','course'],
    })  
    
    if(enrolledStudentsWithCourse.length === 0){
     return res.status(404).json({
         error:"No students found"
     })
    }
    

    return res.status(200).json(enrolledStudentsWithCourse);

}


export const deleteEnroll = async (req:Request, res:Response) => {
    const studentId = parseInt(req.params.studentId)
    const courseId = parseInt(req.params.courseId)
    
    const studentData = await studentEntity.findOneBy({
        id:studentId
    })

    const courseData = await courseEntity.findOneBy({
        course_id:courseId
    })

    if(!studentData || !courseData){
        return res.status(404).json({
            error:"Data not found"
        })
    }


    
    const existEnroll = await enrollmentEntity.findOne({
        where:{course:courseData, student:studentData}
    })

    if(!existEnroll){
        return res.status(404).json({
            error:"Data not found"
        })
    }
    

    await enrollmentEntity.delete(existEnroll);

    return res.status(200).json({
        success:"Deleted Successfully"
    })

}




