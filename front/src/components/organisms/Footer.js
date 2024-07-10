import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #1c32bb;
  color: #fff;
  height: 100px;
  padding: 8px;
`;

const Footer = () => {
  return (
    <Container>
      <p>Termos de Uso | Política de Privacidade</p>
    </Container>
  );
};

export default Footer;
