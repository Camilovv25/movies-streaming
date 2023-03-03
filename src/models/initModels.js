const Users = require("./users.models")
const Movies = require('./movies.models')
const Series = require('./series.models')
const MovieGenres = require('./movieGenres.models')
const SerieGenres = require ('./serieGenres.models')
const Episodes = require('./episodes.models')
const Genres = require('./genres.models')
const Seasons = require('./seasons.models')

const initModels = () => {

  Users 

  Movies.hasMany(MovieGenres)
  MovieGenres.belongsTo(Movies)

  Genres.hasMany(MovieGenres)
  MovieGenres.belongsTo(Genres)

  Genres.hasMany(SerieGenres)
  SerieGenres.belongsTo(Genres)

  Series.hasMany(SerieGenres)
  SerieGenres.belongsTo(Series)

  Series.hasMany(Seasons)
  Seasons.belongsTo(Series)

  Seasons.hasMany(Episodes)
  Episodes.belongsTo(Seasons)
}

module.exports = initModels