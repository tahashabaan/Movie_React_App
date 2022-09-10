import React, {useState, useEffect} from 'react'
import API from '../API'

export const useMovieFetch = (movieId) => {

  const [movie, setMovie] = useState({
    movie:{},
    actors:[],
    director:[]
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async (movieId) => {

    try {
      setLoading(true)
      setError(null)

      const movie = await API.fetchMovie(movieId);
      const credit = await API.fetchCredit(movieId);

      console.log(credit)

      const director = credit.crew.filter(director => 
         director.job ==="Director" )

      const actors = credit.cast.filter( actor => actor.profile_path )


      setMovie({
        ...movie,
        director,
        actors
      })

    

    } catch(error) {
      setError(true)
    }

    setLoading( false )
    
  }
  
  useEffect(() => {
    fetchMovie(movieId)
    console.log(movie)
   }, [movieId]);

  return {
    movie,
    error,
    loading
    // setMovieId
  }

  
}
