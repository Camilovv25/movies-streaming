const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING
  },
  birthday:{
    type: DataTypes.DATE
  },
  profileImage:{
    type: DataTypes.STRING
  },
  role:{
    type: DataTypes.STRING,
    defaultValue: 'normal'
  },
  status: {
    type: DataTypes.STRING
  }
});

module.exports = Users