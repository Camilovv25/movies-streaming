const Movies = require('../models/movies.models')
const MovieGenres = require ( '../models/movieGenres.models')
const uuid = require('uuid')
const Genres = require('../models/genres.models')

const findAllMovies = async(limit, offset) => {
  //limit -> cuantos quiero mostrar
  //offset -> donde empiezo a mostrar 
  const queryOptions = {
    limit: limit || 20,
    offset: offset || 0
  }

  const data = await Movies.findAndCountAll(queryOptions)
  return data
}

const createMovie = async(movieObj) => {
  const newMovie = {
    id: uuid.v4,
    title: movieObj.title,
    synopsis: movieObj.synopsis,
    releaseYear: movieObj.releaseYear,
    director: movieObj.director,
    duration: movieObj.duration,
    trailerUrl: movieObj.trailerUrl,
    coverUrl: movieObj.coverUrl,
    movieUrl: movieObj.movieUrl,
    clasification: movieObj.clasification,
    rating: movieObj.rating
  }

  const data = Movies.create(newMovie)

  return data
}

const createMovieGenre = async (movieGenreObj) => {
  const data = await MovieGenres.create({
    id: uuid.v4(),
    movieId:movieGenreObj.movieId,
    genreId: movieGenreObj.genreId 
  })
  return data
}
const findAllMoviesByGenre = async(genreId) => {
  const data = await Movies.findAll({
    include: {
      model: MovieGenres,
      include: {
        model: Genres,
      },
      where:{
        id: genreId
      }
    }
  })
  return data
}
module.exports = {
  findAllMovies,
  createMovie, 
  createMovieGenre,
  findAllMoviesByGenre
}