import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from '@mui/material/Pagination';

// Static data for courses and students
interface Course {
  id: number;
  name: string;
}

interface Student {
  id: number;
  name: string;
  courses: number[];
}

const coursesData: Course[] = [
  { id: 1, name: 'Mathematics' },
  { id: 2, name: 'Physics' },
  { id: 3, name: 'History' },
  // Add more courses as needed
];

const studentsData: Student[] = [
  { id: 101, name: 'John Doe', courses: [1, 2] },
  { id: 102, name: 'Jane Smith', courses: [1, 3] },
  { id: 103, name: 'Bob Johnson', courses: [2] },
  { id: 101, name: 'John Doe', courses: [1, 2] },
  { id: 102, name: 'Jane Smith', courses: [1, 3] },
  { id: 103, name: 'Bob Johnson', courses: [2] },
  // Add more students as needed
];

const CoursesTab: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = coursesData.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

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
            {currentCourses.map(course => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(coursesData.length / coursesPerPage)}
        page={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
};

const StudentsTab: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsData.slice(indexOfFirstStudent, indexOfLastStudent);

  // Change page
  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

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
            {currentStudents.map(student => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.courses.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(studentsData.length / studentsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
};

const YourMainComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Courses" />
        <Tab label="Students" />
      </Tabs>
      {selectedTab === 0 && <CoursesTab />}
      {selectedTab === 1 && <StudentsTab />}
    </div>
  );
};

export default YourMainComponent;