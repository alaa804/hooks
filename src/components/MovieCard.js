import React from "react"
import { Card, Col } from "antd";
import Rate from "./Rate";





const { Meta } = Card;
const MovieCard = ({movie}) => {
  return (
    
    <Col span={7}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="..." src={movie.posterUrl} /> }
          style={{width : "250px" }}
          
          >
          
         <Meta title={movie.title} description={movie.description} trailer={movie.trailer} />
        
         
        
         <Rate rate={movie.rate} />
        </Card>,
    </Col>
  
  )
}

export default MovieCard
