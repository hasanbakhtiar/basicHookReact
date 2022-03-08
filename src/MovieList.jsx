import React,{useState} from 'react'
import Movie from './Movie'

const MovieList = () => {
    const [movies,setMovies] = useState([
        {
            name: 'Interstaller',
            price: '$10',
            id: 12231
        },
        {
            name: 'Inseption',
            price: '$10',
            id: 122312311
        },
        {
            name: 'Batman',
            price: '$10',
            id: 121312
        }
    ])
  return (<div>
    {movies.map(movie=>(
        <Movie name={movie.name} price={movie.price} key={movie.id}/>
    ))}
    </div>
  );
};

export default MovieList