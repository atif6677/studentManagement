const{Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../utils/dbConnection');


const IdentityCard = sequelize.define('IdentityCard', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },

    cardNo: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false
    }
})

module.exports = IdentityCard;
