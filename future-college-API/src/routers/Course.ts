import { addCourse, listCourse, removeCourse, updateCourse } from "../Controller/Course";

const express = require('express');
const router = express.Router();


router.get('/courses', listCourse);
router.post('/course', addCourse);
router.delete('/course/:courseId', removeCourse)
router.put('/course/:courseId', updateCourse)

module.exports = router;