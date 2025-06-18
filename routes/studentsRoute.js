const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');


router.post('/', studentsController.addStudent);
router.get('/', studentsController.getStudents);
router.get('/:id', studentsController.getStudentById);
router.put('/:id', studentsController.updateStudent);
router.delete('/:id', studentsController.deleteStudent);



module.exports = router;

