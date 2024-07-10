import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  color: #fff;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

const Hero = ({ image }) => (
  <Content>
    <Img src={image} />
  </Content>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
