import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px;

  img {
    max-width: 361px;
    border-radius: 8px;
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #d6eadf;
  border-radius: 48px;
  width: 48px;
  height: 58px;
  border: none;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  margin-right: 40px;
`;

const Slider = ({ images }) => {
  const [position, setPosition] = useState(0);
  const [image, setImage] = useState(images[position]);

  const nextImage = () => {
    const newPosition = (position + 1) % images.length;
    setPosition(newPosition);
    setImage(images[newPosition]);
  };

  const prevImage = () => {
    const newPosition = (position - 1 + images.length) % images.length;
    setPosition(newPosition);
    setImage(images[newPosition]);
  };

  return (
    <Card>
      <div>
        <img src={image} alt="" />
      </div>
      <CardActions>
        <Button onClick={prevImage}>{"<"}</Button>
        <Button onClick={nextImage}>{">"}</Button>
      </CardActions>
    </Card>
  );
};

export default Slider;
