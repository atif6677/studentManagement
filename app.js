const express = require('express');
const app = express();
const port =3000;
const db= require('./utils/dbConnection');
const studentsRoute = require('./routes/studentsRoute');
const courses=require("./routes/coursesroute")
//models

require('./models');

app.use(express.json());

app.use('/students',studentsRoute);
app.use('/courses',courses);

app.get("/",(req, res) => {
  res.send("Student Management API using Sequelize and MySQL");
});





db.sync()  .then(() => {
    app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });



