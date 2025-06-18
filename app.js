const express = require('express');
const app = express();
const db= require('./utils/dbConnection');
const studentsRoute = require('./routes/studentsRoute');

app.use(express.json());

app.use('/students',studentsRoute);


app.use("/",(req, res) => {
  res.send("Student Management API");
});










const port =3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});