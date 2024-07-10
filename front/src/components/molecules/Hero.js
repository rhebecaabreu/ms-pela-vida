import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Container from "components/atoms/Container";

const Root = styled.div`
  color: #fff;
  height: 600px;
  width: 100%;

  ${(props) => css`
    background: url(${props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

const Content = styled.div`
  display: inline-block;
`;

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
