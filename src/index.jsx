import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './context/MovieList';
import Nav from './context/Nav';
import {MovieProvider} from './context/MovieContext';
import AddMovies from './context/AddMovies';
import AppMemo from './hooks/AppMemo'
function App(){
  return(
    <AppMemo />
  )
}

{/* <MovieProvider>
    <Nav />
    <AddMovies />
    <MovieList/>
  </MovieProvider> */}
ReactDOM.render(<App />,document.getElementById('root'));

