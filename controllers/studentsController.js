const db = require('../utils/dbConnection');


const addStudent = (req, res) => {
  const {id, name, email, age } = req.body;

  const query = 'INSERT INTO students (id, name, email, age) VALUES (?, ?, ?, ?)';
  db.execute(query, [id, name, email, age], (err, results) => {
    if (err) {
      console.error('Error adding student:', err);
      return res.status(500).json({ error: 'Failed to add student' });
    }
    res.status(201).json({ message: 'Student added successfully', studentId: results.insertId });
  });
}


const getStudents = (req, res) => {
  const query = 'SELECT * FROM students';
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      return res.status(500).json({ error: 'Failed to fetch students' });
    }
    res.status(200).json(results);
  });
}

const getStudentById = (req, res) => {
  const studentId = req.params.id;
  const query = 'SELECT * FROM students WHERE id = ?';
  db.execute(query, [studentId], (err, results) => {
    if (err) {
      console.error('Error fetching student:', err);
      return res.status(500).json({ error: 'Failed to fetch student' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(results[0]);
  });
}


const updateStudent = (req,res)=>{

const studentId = req.params.id;
const {id,name,email,age }= req.body
const query ='update students set id=?, name=?, email=?, age=? where id=?';

  db.execute(query, [id, name, email, age, studentId], (err, results) => {
    if (err) {
      console.error('Error updating student:', err);
      return res.status(500).json({ error: 'Failed to update student' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student updated successfully' });
  });   
}


const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  const query = 'DELETE FROM students WHERE id = ?';
  db.execute(query, [studentId], (err, results) => {
    if (err) {
      console.error('Error deleting student:', err);
      return res.status(500).json({ error: 'Failed to delete student' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  });
}


module.exports = {
  addStudent,
  getStudents,
    getStudentById, 
    updateStudent,
    deleteStudent
};