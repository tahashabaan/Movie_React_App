import React from 'react'
import classes from './Header.module.css'
import RMLogo from '../images/react-movie-logo.svg';
import  TMDBLogo from '../images/tmdb_logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className={classes.head}>

       <NavLink to='/'>
        <img src={RMLogo} alt='logo1' 
        className={classes['left-side']}/>
      </NavLink>
  

      <NavLink to='/movieId'>
        <img src={TMDBLogo} alt='logo2' 
        className={classes['right-side']}/>
      </NavLink>

    </header>
  )
}

export default Header