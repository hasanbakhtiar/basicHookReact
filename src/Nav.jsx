import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return (
<div>
<div>Hasan</div>
    <p>List of Movies:{movies.length}</p>
</div>
  )
}

export default Nav