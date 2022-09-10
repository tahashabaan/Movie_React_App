import {useEffect, useState} from 'react';
import API from '../API';



 const initalState = {
   page:0,
   results:[],
   total_pages:0,
   total_rseults:0} 

const useHomeFetch = () => {
  
  const [movies, setMovies] = useState(initalState);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false)
   
  console.log(searchTerm)

  const fetchMovies = async ( searchTerm ="", page =1 ) => {

    try {

      setLoading(true)
      setError (false)
      const movie = await API.fetchMovies(searchTerm, page);
 
      setMovies((preMovie) => {
        return {...movie,
         results:movie.page > 1 ? 
          [...preMovie.results, ...movie.results] : 
          [...movie.results] }
      } )

    // applyData(movie)

    } catch (error) {
      setError(true)
    }
    setLoading(false)
}

 useEffect(() => {
   
  fetchMovies(searchTerm)
  
  }, [ searchTerm]);

  useEffect(() => {

    if (loadingMore)  { 

     const timer = setTimeout(() => {
      fetchMovies(searchTerm, movies.page + 1)
      setLoadingMore(false)
     }, 500) 
     return () => clearTimeout(timer);
    }
  
    }, [movies.page , loadingMore]);

 return {
   movies,
   loading,
   error,
   loadingMore,
   searchTerm,
   fetchMovies,
   setMovies,
   setLoadingMore,
   setSearchTerm   }
}

export default useHomeFetch;