import { Request, Response, response } from "express";
import { Course } from "../Model/CoureEntity";
import { Enrollment } from "../Model/EnrollementEntity";
import { AppDataSource } from "../data-source";

type courseProps = {
    name:string,
    title:string,
    description:string,
}


const courseEntity = AppDataSource.getRepository(Course)
const enrollEntity = AppDataSource.getRepository(Enrollment) 

export const addCourse = async (req:Request, res:Response,) =>{

       const c = new Course()

       c.title = req.body.title
       c.term = "2",
       c.description = "Math for freshman"
       c.credit_hour = "3"
       await courseEntity.save(c)  
       res.json(c)
}


export const updateCourse = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id)

    const c = await courseEntity.findOneBy({
        course_id : id
    })
    
    if(!c){
        return res.status(404).json({
            error:'course not found'
        })
    }

    c.credit_hour = req.body.credit_hour || c.credit_hour
    c.description = req.body.description || c.description
    c.term = req.body.term || c.term
    c.title = req.body.title || c.title

    await courseEntity.save(c)

    return res.status(200).json({
        success:"Updated Succesfuly"
    })


}

export const listCourse = async (req:Request, res:Response) => {
     const courses = await courseEntity.find();

     if(!courses){
        return res.status(404).json({
            error:"Not course found"
        })
     }
     
     
     return res.status(200).json(courses)
}

export const listCourseStudent = (id:number) => {
    const courses = enrollEntity.findBy({
          
    })
}

export const removeCourse = async (req:Request, res:Response)=>{
    const c_id = parseInt(req.params.id);

    const course = await courseEntity.findOneBy({
        course_id:c_id
    })

    if(!course){
        return res.status(404).json({
            error:"Data Not Found"
        })
    }

    await courseEntity.delete(c_id);

    return res.status(200).json({
        success:"Data Removed Successfully"
    })
}

