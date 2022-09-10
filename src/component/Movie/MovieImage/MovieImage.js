import { width } from '@mui/system'
import React from 'react'
import InfoMovie from './InfoMovie'
import InfoMovieBar from './InfoMovieBar'
import classes from './MovieImage.module.css'
const MovieImage = ({Image_Url, movie}) => {
  return (
    <div 
    className={classes.img}
     style={{
      backgroundImage:`url(${Image_Url})`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      height:'700px',
      width:`100%`    
    }}>

     <InfoMovie 
      Image_Url= {Image_Url} 
      className={classes.infomovie}
      movie={movie}
      />
     </div>
   
    
  )
}

export default MovieImage