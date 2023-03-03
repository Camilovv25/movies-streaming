const firebase = require('firebase/app')
const {getStorage, uploadBytes, ref, getDownloadURL} = require ('firebase/storage')

const config = require ('../../config').api.firebase

const firebaseApp = firebase.initializeApp(config)

const storage = getStorage(firebaseApp)

const addToFirebaseMovieVideo = async() => {
  const movieRef = ref(storage, `movie-videos/${Date.now()}-${file.originalname}`)

  await uploadBytes(movieRef, file.buffer)
  const movieUrl = await getDownloadURL(movieRef)
  return movieUrl
}

module.exports = addToFirebaseMovieVideo