const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Operation = sequelize.define(
  'operation',
  {
    concept: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull:false,
    },
    type: {
      type: DataTypes.ENUM('entry', 'egress'),
      allowNull: false,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)
module.exports = {
  Operation,
}