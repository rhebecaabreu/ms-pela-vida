import React from "react";
import styled from "styled-components";

export const ButtonsVariants = {
  default: "default",
};

const ButtonStyled = styled.button`
  background: #1274ce;
  text-transform: uppercase;
  padding: 8px 22px;
  border: none;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0px #00000024;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ButtonDefault = (props) => {
  return <ButtonStyled {...props} />;
};

const ButtonWrapper = (props) => {
  switch (props.variant) {
    default:
      return <ButtonDefault {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

export default ButtonWrapper;
