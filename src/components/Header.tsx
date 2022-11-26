import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  & img {
    height: 100%;
  }
`;

function Header() {
  return (
    <Container>
      <img src={require("../images/moviecom_logo.png")} alt="로고 이미지" />
    </Container>
  );
}

export default Header;
