import { Request, Response } from "express";
import { Student } from "../Model/StudentEntity";
import { AppDataSource } from "../data-source";

const student = AppDataSource.getRepository(Student);


type studentPorps = {
    name:string,
    email:string,
    phone:string,
    academic_record:number
}

export const createStudent = async (req:Request, res:Response,data:studentPorps) => {
    const s = new Student();

    if(!data){
        return res.status(404).json({
            error: 'Data is empty'
        })
    }

    s.name = "Jima",
    s.email = "jimd3730@gmail.com",
    s.phone = "0902283730",
    s.academic_record = 3.4
    await student.save(s);
    console.log("students")
    return res.json(s)
}

export const listStudents = async (req:Request, res:Response) => {
    const students = await student.find();

    if(!students){
        return res.status(404).json({
            error: 'No data'
        })
    }
   
     console.log(students)
    return res.status(200).json(students);
}



export const updateStudent = async (req:Request,res:Response) => {
    const id = parseInt(req.params.id);

    const st = await student.findOneBy({
        id:id
    })

    if(!st){
        return res.status(404).json({
            error:"student not found"
        })
    }
    
    st.name = req.body.name || st.name
    st.email = req.body.email || st.email
    st.phone = req.body.email || st.email
    
    await student.save(st)
    
    return res.status(200).json({
        success:'Updated Successfully'
    })
}

export const removeStudent = async (req:Request,res:Response) => {
    const id = parseInt(req.params.id)
    
    const st = await student.findOneBy({
        id:id
    })

    if(!st){
        return res.status(404).json({
            error:"student not found"
        })
    }

    
    await student.delete(id)

    return res.status(200).json({
        succes: "Removed Succesfuly"
    })
    
}