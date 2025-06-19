const express = require('express');
const app = express();
const port =3000;
const db= require('./utils/dbConnection');
const studentsRoute = require('./routes/studentsRoute');
const studentsModel = require('./models/student');

app.use(express.json());

app.use('/students',studentsRoute);


app.use("/",(req, res) => {
  res.send("Student Management API");
});





db.sync({force:true})  .then(() => {
    app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });



