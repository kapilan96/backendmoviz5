var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

const TMDB_API_KEY = "9c5dcd784bbf4299063baacf89419495";
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzVkY2Q3ODRiYmY0Mjk5MDYzYmFhY2Y4OTQxOTQ5NSIsInN1YiI6IjY0YTUyOWE2YTBiZTI4MDEwZGYyMjExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p9RV4EoIjXKfTjLNfEvoYnJ6ATE9sTFnTWV09EHwAfI'
  }
};
router.get('/movies', (req, res) => {
    fetch(url, options)
  .then(response => response.json())
  .then(data => res.json({movies : data.results}))
  .catch(err => console.error('error:' + err))
  

})




  module.exports = router;

