import { createContext } from "react";

export const movieContext = createContext({
  movies: [],
  error: false,
  loading: false,
  searchTerm: '',
  setSearchTerm : (key) => {},
  setLoadingMore: () => {}  })


export default movieContext;

