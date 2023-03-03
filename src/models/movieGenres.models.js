const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Genres = require('./genres.models')
const Movies = require('./movies.models')

const MoviesGenres = db.define('Movies_genres', {
  id:{
    type: DataTypes.UUID,
    primaryKey: true 
  },
  movieId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model:Movies,
      key: 'id'
    }
  },
  genreId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Genres,
      key: 'id'
    }
  }

})

module.exports = MoviesGenres