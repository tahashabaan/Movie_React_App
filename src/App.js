import React from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Movie from './component/Movie/Movie';
import Error from './component/Error/Error';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

  const App = (props) => {
  return (
    <Router>
         <Header/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/:movieId' element={<Movie/>}/>
         <Route path='*' element={<Error/>}/>
        </Routes>
   </Router>
 
  )
}

export default App;
