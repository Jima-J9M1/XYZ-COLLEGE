import { addGrade, getGrades, getPassAndFailStudents, removeGrade, updateGrade } from "../Controller/Grade";

const express = require('express');
const router = express.Router();


router.post('/grade', addGrade);
router.get('/grades', getGrades);
router.get('/pass-fail-grade', getPassAndFailStudents);
router.put('/student/:studentId/course/:courseId', updateGrade);
router.delete('/student/:studentId/course/:courseId', removeGrade);

module.exports = router