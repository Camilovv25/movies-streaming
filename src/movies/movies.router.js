const router = require('express').Router()
const movieServices = require ('./movies.services')

const upload = require( '../utils/multer')

router.route('/')
  .get(movieServices.getAllMovies)
  .post(upload.single('movieVideo'), movieServices.postMovie)

router.post('/:movieId/genres/:genreId', movieServices.postMovieGenre)
module.exports = router