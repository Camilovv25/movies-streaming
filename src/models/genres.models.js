const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Genres = db.define('Genres', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Genres