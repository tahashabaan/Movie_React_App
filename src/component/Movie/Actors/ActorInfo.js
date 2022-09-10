import React from 'react'
import classes from './ActorInfo'
const ActorInfo = ({movie}) => {
  return (
    <div className={classes.hover}>
     <h3>{movie.character}</h3>
     <h4>{movie.name}</h4>
  </div>
  )
}

export default ActorInfo