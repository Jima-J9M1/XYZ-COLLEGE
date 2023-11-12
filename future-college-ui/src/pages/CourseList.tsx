import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomPagination from '../components/Pagination'; // Import your pagination component
import { listCourse } from '../api/CourseApi';

export interface Course {
  id: number;
  name: string;
  credit_hours:string,
  description:string
}

interface CourseListProps {
  courses: Course[];
  itemsPerPage: number;
}

const CourseList: React.FC<CourseListProps> = ({ courses, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [course, setCourse] = React.useState<Course[]>([])
  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const pageCount = Math.ceil(courses.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const loadCourse = () => {
    listCourse().then(data =>{
        if(data.error){
            console.log(data.error)
        }else{
            
            setCourse(data)
        }
    })
  }

  useEffect(()=>{

    loadCourse();
  }, [])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination pageCount={pageCount} currentPage={currentPage} onChange={handlePageChange} />
    </div>
  );
};

export default CourseList;