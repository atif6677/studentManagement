const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.post('/addCourses', coursesController.addCourses); 
router.get('/addStudentCourses',coursesController.addStudentsToCourses)

module.exports = router;
