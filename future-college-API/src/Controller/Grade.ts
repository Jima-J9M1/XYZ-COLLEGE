import { Request, Response, response } from "express";
import { Course } from "../Model/CoureEntity";
import { Enrollment } from "../Model/EnrollementEntity";
import { Student } from "../Model/StudentEntity";
import { AppDataSource } from "../data-source";
import { Grade } from "../Model/GradeEntity";


const enrollmentEntity = AppDataSource.getRepository(Enrollment);
const studentEntity = AppDataSource.getRepository(Student);
const courseEntity = AppDataSource.getRepository(Course);
const gradeEntity = AppDataSource.getRepository(Grade);


export const addGrade = async (req:Request, res:Response) => {
    const letters = new Set(["A","B","C","D","E","F"])


    const data = req.body
    const grade = new Grade();
    const s_id  = data.id;
    const c_id = data.c_id;

    const course  = await courseEntity.findOneBy({
        course_id:c_id
    })

    const student = await studentEntity.findOneBy({
        id:s_id
    })

    if(!student || !course){
        return res.status(404).json({
            error:"Data Not Found"
        })
    }

    
    
     const grade_val = (req.body.grade).toUpperCase()

    if (!letters.has(grade_val)){
        return res.status(400).json({
            error:`${grade_val} is not in ["A","B","C","D","F"]`
        })
    }
    grade.grade 
    grade.course = course
    grade.student = student

    gradeEntity.save(grade);

    return res.status(200).json(grade);
    
}
export const getGrades = async (req:Request,res:Response) =>{
      const grade = await gradeEntity.find({
        relations:['course','student']
      })

      if(!grade){
        return res.status(404).json({
            error:"Data Not founded"
        })
      }

      return res.status(200).json(grade);
}

export const getPassAndFailStudents = async (req:Request, res:Response) => {
    const grades = await gradeEntity.find({
        relations:[
            'course', 
            'student'
        ]
    });

    if(!grades){
        res.status(404).json({
            error:"Data Not Found"
        })
    }

    const passStudents = grades.filter((grade) => grade.grade && grade.grade <= "C");
    const failStudents = grades.filter((grade) => grade.grade && grade.grade > "C");
    
    if(!passStudents && !failStudents){
        return res.status(200).json({
            error:"Data not found"
        })
    }
    return res.status(200).json([passStudents, failStudents])
}



export const removeGrade = async (req:Request, res:Response) => {
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


    
    const existGrade = await gradeEntity.findOne({
        where:{course:courseData, student:studentData}
    })

    if(!existGrade){
        return res.status(404).json({
            error:"Data not found"
        })
    }
    

    await gradeEntity.delete(existGrade);

    return res.status(200).json({
        success:"Deleted Successfully"
    })

}


export const updateGrade = async (req:Request, res:Response) => {
    const letters = new Set(["A","B","C","D","E","F"])


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

    


    
    const existGrade = await gradeEntity.findOne({
        where:{course:courseData, student:studentData}
    })

    if(!existGrade){
        return res.status(404).json({
            error:"Data not found"
        })
    }
    
    const grade_val = req.body.grade

    if(grade_val && !letters.has(grade_val)){
        return res.status(400).json({
          error:`${grade_val} is not in ["A","B","C","D","F"]`
        })
    }
    
    existGrade.grade = grade_val || existGrade.grade
    

    await gradeEntity.save(existGrade);

    return res.status(200).json({
        success:"Updated Successfully"
    })

}

