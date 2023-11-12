import NavBar from './components/NavBar'
import Analytics from './pages/Analytic';
import CourseList from './pages/CourseList';
import Home from './pages/Home';
import './index.css';
// import Home from './pages/Home'
import StudentList from './pages/StudentList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  interface Course {
    id: number;
    name: string;
  }
  type Student = {
     id:number,
     name:string,
     courses:number[]

  }
  
  const studentsData: Student[] = [
    { id: 101, name: 'John Doe', courses: [1, 2, 5] },
    { id: 102, name: 'Jane Smith', courses: [1, 3, 6] },
    { id: 103, name: 'Bob Johnson', courses: [2, 4, 7] },
    { id: 104, name: 'Alice Williams', courses: [3, 5, 8] },
    { id: 105, name: 'Charlie Brown', courses: [4, 6, 9] },
    { id: 106, name: 'Eva Davis', courses: [5, 7, 10] },
    { id: 107, name: 'Frank Miller', courses: [6, 8, 9] },
    { id: 108, name: 'Grace Wilson', courses: [7, 9, 10] },
    { id: 109, name: 'Harry Thompson', courses: [8, 10] },
    { id: 110, name: 'Isabel Garcia', courses: [9] },
  ];

  const coursesData: Course[] = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'History' },
    { id: 4, name: 'Biology' },
    { id: 5, name: 'Chemistry' },
    { id: 6, name: 'Computer Science' },
    { id: 7, name: 'Literature' },
    { id: 8, name: 'Art' },
    { id: 9, name: 'Physical Education' },
    { id: 10, name: 'Music' },
  ];
  
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<CourseList courses={coursesData} itemsPerPage={5} />} />
      <Route path='/student' element={<StudentList students={studentsData} itemsPerPage={5}  />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
