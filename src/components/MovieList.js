import React from "react"
import MovieCard from "./MovieCard";
import { Row } from "antd";
import { Link } from "react-router-dom";


const MovieList = ({movies}) => {
  
  return (
    
    <Row>
      { 
       movies.map((movie , index) => {return(
       <Link 
       to={`/listofmovies/${movie.title}/${movie.description}/${movie.trailer}`}>
       <MovieCard movie={movie} key={index} />)
       </Link>
        ) })}
    </Row>
  
  
  )}

export default MovieList