import styled from "styled-components";
import FiemsLogo from "../../assets/fiems_logo.png";
import Accessibility from "../../assets/icon_accessibility.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #edf9fe;
`;

const Logo = styled.img`
  max-width: 204px;
  background-color: #fff;
  margin-left: 20px;
`;

const AccessibilityButton = styled.div`
  display: flex;
  width: 80px;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 40px;
`;

const LogoArea = () => {
  return (
    <Container>
      <Link>
        <Logo src={FiemsLogo} />
      </Link>
      <Link>
        <AccessibilityButton image={Accessibility} />
      </Link>
    </Container>
  );
};

export default LogoArea;
