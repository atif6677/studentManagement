const { Student } = require("../models");
const courses =require("../models/courses");
const student =require("../models/student")
const addCourses = async (req,res)=>{
    try{
        const {name}= req.body;
        const course = await courses.create({'name':name});
        res.status(201).json(course); 
       
    }

    catch (error){
       res.status(500).json({'error':error.message});
    }
}


const addStudentsToCourses = async(req,res)=>{

    try {

        const {studentId,courseIds}=req.body;
        const  student = await Student.findByPk(studentId);
        const course = await courses.findAll({
            where:{id:courseIds}
        })

        await student.addCourses(courses);
        const updateStudent = await Student.findByPk(studentId,{include:courses});
        res.status(200).json(updateStudent)
        
    } catch (error) {
        
    }
}


module.exports = { 
    addCourses,
    addStudentsToCourses
 };