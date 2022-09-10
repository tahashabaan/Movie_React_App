import React, { useState} from 'react'
import MovieItem from '../MovieItem/MovieItem';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../../config'
import Spinner from '../Spinner/Spinner';
import classes from './HomeList.module.css'
import Button from '../../UI/Button';
 
 const MovieList = (props) => {

  const {loadingMore, setLoadingMore, loading, error, headers} = props;
  const {results} = props.movies;

    
  const onCLickButtonHandler = () => {
    props.setLoadingMore(true);
  }

  let content = results && results.map (   movie => <MovieItem 
    key = {movie.id}
    movieId={movie.id}
    movies = {movie}
    IMAGE_URL = {movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:``}/>) 

    if (loading) content = <div>loading...</div>
    if (error)   content = <div>something wrong went..!</div>

  return (
    <>
      { !loading && !error && <h2>{headers}</h2> }
     <ul className={classes.list}> {content} </ul>

     {!loadingMore && 
     <Button  
      className={classes.btn} 
      onClick={onCLickButtonHandler}>
        Load More
     </Button>}

    {loadingMore && <Spinner/>}
  </>
  )
 }

export default MovieList;