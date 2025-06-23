const db = require('../utils/dbConnection');
const Students = require('../models/student');
const IdentityCard = require('../models/identitycard'); // Corrected to use IdentityCard with capital 'I'

const addStudent = async(req, res) => {
  try {
    const {id, name, email, age } = req.body;
    const student = await Students.create({
      id:id,
      name:name,
      email:email,
      age:age
    });
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
}

const getStudents = async (req, res) => {
  try {
    const students = await Students.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

const getStudentById = async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await Students.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};

const updateStudent = async(req,res)=>{
  try {
    const studentId = req.params.id;
     const {id,name,email,age }= req.body
    const student = await Students.findByPk(studentId);
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }
    student.name = name;
    student.email = email;
    student.age = age;
    await student.save();
    res.status(200).json({ message: 'Student updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
}

const deleteStudent = async (req, res) => {
  try {
     const studentId = req.params.id;
    const student = await Students.destroy({
      where: {
        id:studentId
      }
    });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
}

const addingValuesToStudentAndIdentityTable = async (req,res) => {
  try {
    // DO NOT include 'id' in req.body.student if it's auto-incrementing
    const student = await Students.create(req.body.student);

    const idCard = await IdentityCard.create({ // Corrected to IdentityCard (capital 'I')
      ...req.body.IdentityCard, // Corrected to IdentityCard (capital 'I') to match model export and expected request body
      StudentId: student.id
    })
      res.status(201).json({
        message: 'Student and Identity Card added successfully',
        student,
        idCard
      });
    }
      catch (error) {
        console.error('Error in addingValuesToStudentAndIdentityTable:', error);
       res.status(500).json({ error: 'Failed to add student and identity card' });
      }
    }

const addIdentityCardToStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const { cardNumber } = req.body;

    const student = await Students.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const identityCard = await IdentityCard.create({
      cardNumber: cardNumber,
      StudentId: student.id
    });

    res.status(201).json({
      message: 'Identity Card added to student successfully',
      identityCard
    });
  } catch (error) {
    console.error('Error adding identity card to student:', error);
    res.status(500).json({ error: 'Failed to add identity card to student' });
  }
};


module.exports = {
  addStudent,
  getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    addingValuesToStudentAndIdentityTable,
    addIdentityCardToStudent
};