// import {POPULAR_BASE_URL, SEARCH_BASE_URL} from './config';
  
    const API_URL = `https://api.themoviedb.org/3/`;
    const API_KEY = `c4c036c616209be505109b837d3eccc5`;


  const apiSetting = {
    fetchMovies: async (searchTerm, page) => {

      const SEARCH_BASE =`${API_URL}search/movie?api_key=${API_KEY}&page=${page}&query=${searchTerm}`;

      const POPULAR_BASE = `${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`;

      const endpoint = searchTerm ? SEARCH_BASE : POPULAR_BASE

        return await (await fetch(endpoint)).json();
    },

    fetchMovie: async (movieId) => {

      const endpoint =`${API_URL}movie/${movieId}?api_key=${API_KEY}`;

       return await (await fetch(endpoint)).json();
    },

    fetchCredit: async (creditId) => {
      const endpoint  = `${API_URL}movie/${creditId}/credits?api_key=${API_KEY}`
      // `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

      return await (await fetch(endpoint)).json();
    }
}

 export default apiSetting;