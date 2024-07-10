import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #fff;
  color: #183fff;
  padding: 6px 16px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
`;

const NavbarButton = (props) => {
  return <ButtonStyled {...props} />;
};

export default NavbarButton;
