import { deleteEnroll, enroll, getEnrolledCoursesByStudent, getEnrolledStudentsWithCourse, getEnrolls } from "../Controller/Enroll";

const express = require('express');
const router = express.Router();


router.post('/enroll/student/:studentId/course/:courseId', enroll);
router.get('/student/:studentId/courses', getEnrolledCoursesByStudent);
router.get('/course/:courseId/students', getEnrolledStudentsWithCourse);
router.get('/enrolls', getEnrolls);
router.delete('/student/:studentId/course/:courseId', deleteEnroll)

module.exports = router;