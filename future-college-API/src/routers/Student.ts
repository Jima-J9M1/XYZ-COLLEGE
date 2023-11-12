import { createStudent, listStudents, removeStudent, updateStudent } from "../Controller/Student";

const express = require('express');
const router = express.Router();


router.get('/students', listStudents);
router.post('/create-student', createStudent);
router.put('/update-student/:studentId', updateStudent);
router.delete('/remove-student/:studentId', removeStudent);
// router.get('/students/:course_id', studentWithACourse);

module.exports = router;