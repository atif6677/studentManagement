const Student= require('./student');
const IdentityCard = require('./identitycard');


Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

module.exports = {
    Student,
    IdentityCard
};