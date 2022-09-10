import React from 'react'
import useHomeFetch from '../../hooks/useHomeFetch';
import movieContext from './movie-context'


const MovieProvider = (props) => {

  const { movies, loading, error, setLoadingMore,    setSearchTerm, loadingMore, searchTerm } = useHomeFetch();

    const searchTermHandle = (key) => {
      setSearchTerm(key)
    }

    const loadingMoreHandle = () => {
      setLoadingMore(true)
    }

  return <movieContext.Provider value={{
    movies,
    loading,
    error,
    searchTerm,
    loadingMore,
    setSearchTerm:searchTermHandle,
    setLoadingMore:loadingMoreHandle,
    }}>
    {props.children}
  </movieContext.Provider>

}

export default MovieProvider