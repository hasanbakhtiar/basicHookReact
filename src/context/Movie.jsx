import React from 'react'

const Movie = ({name,price}) => {
  return (
    <div>
        {/* <h3>{props.name}</h3> props yazmadan */}
        <h3>{name}</h3>
        <h3>{price}</h3>
    </div>
  )
}

export default Movie