const Student= require('./student');
const IdentityCard = require('./identitycard');
const courses = require('./courses');
const studentCourses=require('./studentCourses')

//one to one

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);


//many to many


Student.belongsToMany(courses,{through:studentCourses});
courses.belongsToMany(Student,{through:studentCourses});


module.exports = {
    Student,
    IdentityCard,
    courses,
    studentCourses
};