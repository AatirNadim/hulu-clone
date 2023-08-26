import axios from 'axios'

const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

const movieBaseUrl = 'https://api.themoviedb.org/3/movie'

const movieByGenreBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

const getPopularMovies = axios.get(movieBaseUrl + `/popular?api_key=${api_key}`)

const getMovieByGenreId = (id:Number) => axios.get(movieByGenreBaseUrl+"&with_genres="+id);

export default {
  getPopularMovies, getMovieByGenreId
}