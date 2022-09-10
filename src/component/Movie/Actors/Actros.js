import { PropTypes } from 'prop-types';
import React from 'react';
import classes from './Actros.module.css';


const Actros = ({movie, Image_Url}) => {
  return (

    <ul className={classes.list}>

     { movie.actors.map ( actor => <li className={classes.item} key={actor.id}> 

        <img src={`${Image_Url}${actor.profile_path}`}/> 
        <div className={classes.hover}>
          <h3>{actor.character}</h3>
          <h4>{actor.name}</h4>
        </div>
     </li> ) }

    </ul>

  )
}
PropTypes.Actros = {
  Image_Url: PropTypes.string,
  movie : PropTypes.object
}
export default Actros