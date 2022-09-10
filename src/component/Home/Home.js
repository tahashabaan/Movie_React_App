import React, { useState } from 'react';
import useHomeFetch from '../../hooks/useHomeFetch';
import HeroHead from './HeroImage';
import MovieList from './MovieList/MovieList';



const Home = () => {

  const { movies, loading, error, setLoadingMore,   setSearchTerm, loadingMore, searchTerm } = useHomeFetch();

  window.onscroll = () => {
    const window_obj = (window.pageYOffset ? true : false); 
    console.log(window.pageYOffset)
    console.log(window.pageXOffset)
  }


  console.log(movies)

  
  return (
    <>
     <HeroHead 
      setSearchTerm={setSearchTerm}
      movies={movies}
      searchTerm={searchTerm}/>

     <MovieList 
       movies={movies} 
       setLoadingMore={setLoadingMore}
       loadingMore={loadingMore}
       error={error}
       loading={loading}
       headers ={searchTerm ? 'Search Results' : 'Popular Movies'}
       />
    </>
  )
}

export default Home