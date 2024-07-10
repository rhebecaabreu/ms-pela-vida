import NavbarButton from "components/atoms/NavbarButton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const Button = styled(NavbarButton)`
  margin-left: 24px;
`;

const Navbar = () => {
  return (
    <Container>
      <Button>Sobre o projeto</Button>
      <Button>Inscrições</Button>
      <Button>Painel Admin</Button>
    </Container>
  );
};

export default Navbar;
