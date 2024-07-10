import React from "react";
import styled from "styled-components";

export const ButtonsVariants = {
  default: "default",
};

const ButtonStyled = styled.button``;

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
