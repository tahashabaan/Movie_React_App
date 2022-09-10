import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MovieHeader.module.css'
const MovieHeader = ({title}) => {
  return (
    <header className={classes.head}>
      <NavLink to='/'><span>Home</span></NavLink> 
       <span>/</span>
       <span> {title} </span>

    </header>
  )
}

export default MovieHeader