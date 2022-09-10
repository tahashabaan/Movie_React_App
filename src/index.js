import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import MovieProvider from './component/store/MovieProvider';
import { BrowserRouter } from 'react-router-dom';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
 <MovieProvider>
    <App/>
 </MovieProvider> 
);
