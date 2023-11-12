import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomPagination from '../components/Pagination'; // Import your pagination component
import { listStudent } from '../api/StudentApi';
import { getEnrolledCoursesByStudent } from '../api/EnrollApi';

export interface Student {
  id: number;
  name: string;
  email:string;
  phone:string;
  courses: number[];
}

export interface Course {
    course_id: number;
    name: string;
    credit_hours:string,
    description:string
  }



interface StudentListProps {
  students: Student[];
  itemsPerPage: number;
}

const StudentList: React.FC<StudentListProps> = ({ students, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [studentData, setStudents] = useState<Student[]>([])
  const [courseWithStudent, setCourseWithStudent] = useState<number[]>([])

  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  const [error, setError] = useState("")
  const intialcoursesWithStudent:[] = []
  
  const pageCount = Math.ceil(students.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const loadStudent = () => {
    listStudent().then(res =>{
        if(res.error){
            setError(res.error)
        }else{
            setStudents(res)

            for(let i = 0; i < res.length; i++){
                getEnrolledCoursesByStudent(res[i].id).then(res =>{
                    if(res.error){
                        setError(res.error)
                    }else{
                        setCourseWithStudent([...res])
                    }
                })
            }
        }
    })
  }
  
 

  useEffect(()=>{
    loadStudent()
  },[])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Courses Enrolled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.courses.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination pageCount={pageCount} currentPage={currentPage} onChange={handlePageChange} />
    </div>
  );
};

export default StudentList;