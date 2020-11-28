import React from 'react'
import MovieCard from './MovieCard';
import { Row } from 'antd';


const MovieList = ({movies}) => {
  
  return (
    <Row>
      { 
       movies.map((movie , index) => <MovieCard movie={movie} key={index} />)
      }
    </Row>
  )
}

export default MovieList
