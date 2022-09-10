import React, { useEffect, useState } from 'react'
import classes from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";




const SearchBar = ({setSearchTerm}) => {

  const [inputSearch, setInputSearch] = useState('')

     useEffect(() => {
       const timer = setTimeout(() => {
      
        setSearchTerm(inputSearch);

       }, 200)

     return   () => clearTimeout(timer)

     },[inputSearch])

    const onChangeHandler = (e) => {
      setInputSearch(e.target.value)
    }

   console.log(inputSearch)
  return (
    <div className={classes.search}>
      <FaSearch/>
      <input type='text' placeholder='search Movie' onChange=  {onChangeHandler}/>
    </div>
  )
}

export default SearchBar