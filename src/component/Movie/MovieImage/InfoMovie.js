import React from 'react'
import { PropTypes } from 'prop-types'
import classes from './InfoMovie.module.css'

const InfoMovie = ({Image_Url, movie}) => {

  // let vote_average = movie.vote_average.toFixed(2);

   console.log(typeof(movie.vote_average))

  return (
    <section className = {`${classes.infomovie}`}>
     
     <div className={classes['left-side']}>
      <img src={Image_Url}/>
     </div>

     <div className={classes['right-side']}>
       <h1>{movie.title} </h1>
       <p> {movie.overview}</p>
      <div className={classes.infodown}>
       <div>
        <h2>Rating</h2>
        <p className={classes.p}>{movie.vote_average}</p>
       </div>
       <div>
        <h2>Director</h2>
        <p></p>
         {movie.director.map(director => <p key = {director.id}>
          {director.name}
       </p>)}
       </div>

      </div>
     </div>

   </section>
  )
}

PropTypes.InfoMovie = {
  Image_Url: PropTypes.string,
  movie: PropTypes.object
}

export default InfoMovie;