import React from "react";
import { Card, Rate } from "antd";

const { Meta } = Card;

const MovieCard = ({ title, description, posterURL, rating }) => (
  <Card hoverable cover={<img alt="example" src={posterURL} />}>
    <Meta title={title} description={description.slice(0, 150)} />
    <Rate disabled defaultValue={rating} />
  </Card>
);

export default MovieCard;
