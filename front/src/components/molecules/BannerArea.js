import styled from "styled-components";

const StyledBannerArea = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 270px;
`;

const BannerArea = ({ image, children }) => (
  <StyledBannerArea image={image}>{children}</StyledBannerArea>
);

export default BannerArea;
