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
  const scrollInto = (anchor) => {
    const element = document.getElementById(anchor);

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Button onClick={() => scrollInto("about")}>Sobre o projeto</Button>
      <Button onClick={() => scrollInto("subscribe")}>Inscrições</Button>
      <Button>Painel Adm</Button>
    </Container>
  );
};

export default Navbar;
