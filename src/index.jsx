import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

function App(){
  return(<div>
    <MovieList/>
  </div>
    
  )
}


ReactDOM.render(<App />,document.getElementById('root'));

