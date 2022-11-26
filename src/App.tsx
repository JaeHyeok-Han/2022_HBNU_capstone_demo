import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
