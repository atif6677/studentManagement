const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('studentmanagement','root','Atif@123', {
  host: 'localhost',  
  dialect: 'mysql'
});



 (async () => {try {
  sequelize.authenticate(); 
  console.log('Connection to the database has been established successfully.');
} catch (error) { 
  console.error('Unable to connect to the database:', error);
}   
 })();



module.exports = sequelize;













// const mySql= require('mysql2');

// const connection = mySql.createConnection({
//   host: 'localhost',
//   user:'root',
//   database: 'studentManagement',
//   password: 'Atif@123'
// });



// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
  
//    const studentsTable = `CREATE TABLE IF NOT EXISTS students (   
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     age INT NOT NULL
   
//   );
//   `;

//   connection.execute(studentsTable, (err, results) => {
//     if (err) {
//       console.error('Error creating students table:', err);
//     } else {
//       console.log('Students table created successfully');
//     }
//   });
//   console.log('Connected to the database');

// });



// module.exports = connection;