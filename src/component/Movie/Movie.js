import React from 'react'
import {useParams} from 'react-router-dom';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import Actros from './Actors/Actros';
import MovieHeader from './MovieHeader/MovieHeader';
import MovieImage from './MovieImage/MovieImage';
import InfoMovieBar from './MovieImage/InfoMovieBar';

const Movie = (props) => {

  const params = useParams();
  const {movie, loading, error} = useMovieFetch(params.movieId);
  console.log(movie)

  return (
    <>
    <MovieHeader title={movie.title}/>
     <main>
      <MovieImage 
       Image_Url= {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
       movie={movie}
      />
     <InfoMovieBar
        time={movie.runtime}
        budget ={movie.budget}
        revenue={movie.revenue}
      />
     <Actros 
       movie={movie} 
       Image_Url= {`${IMAGE_BASE_URL}${BACKDROP_SIZE}`}/>
     </main>
    </>
  )

}

export default Movie