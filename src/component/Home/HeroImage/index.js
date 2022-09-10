import React, { Fragment } from 'react'
import HeroImage from './HeroImage'
import SearchBar from './SearchBar'
import {IMAGE_BASE_URL, BACKDROP_SIZE } from '../../../config';


const index = (props) => {
  const {results} =  props.movies

  return (
    <>

      { !props.searchTerm && results[0] && <HeroImage 
        title = {results[0].original_title}
        description = {results[0].overview}
        IMAGE_URL = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${results[0].backdrop_path}`}  /> }

      <SearchBar setSearchTerm={props.setSearchTerm}/>

    </>
  )
}

export default index