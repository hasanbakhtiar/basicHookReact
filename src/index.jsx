import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import AddMovies from './AddMovies';
function App(){
  return(<MovieProvider>
    <Nav />
    <AddMovies />
    <MovieList/>
  </MovieProvider>
    
  )
}


ReactDOM.render(<App />,document.getElementById('root'));

