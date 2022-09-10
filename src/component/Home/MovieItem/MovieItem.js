import { Link } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import OverLay from '../OverLay/OverLay'
import classes from './MovieItem.module.css'

const MovieItem = ({movies, IMAGE_URL, movieId}) => {
  const[ overLay, setOverLay] = useState(false)
  const [modalForm, setModalForm] = useState(true);

  const hideModalHandler = () => {
    setModalForm(false)
  }

  return (
   <>

    {overLay && modalForm && <OverLay 
     IMAGE_URL={IMAGE_URL} 
     hideModal={hideModalHandler}
     movies={movies} />}
 
        <li className={classes.item}  
         onClick={() => { setOverLay(true) } } >
        <NavLink to={`${movies.id}`}> 
          <img src={IMAGE_URL}/> 
        </NavLink> 
         <h2>{movies.title}</h2>
         <p>{movies.overview}</p>
       </li>
     {/* </Link> */}
     

    </>
  )
}

export default MovieItem