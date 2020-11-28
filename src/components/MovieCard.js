import React from 'react'
import { Card, Col } from 'antd';
import Rate from "./Rate";

const { Meta } = Card;
const MovieCard = ({movie}) => {
  return (
    <Col span={8}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="..." src={movie.posterUrl} />}
          >
         <Meta title={movie.title} description={movie.description} />
         <Rate rate={movie.rate} />
        </Card>,
    </Col>
  )
}

export default MovieCard
