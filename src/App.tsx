import React from "react";
import styled from "styled-components";
import EmptyBar from "./components/EmptyBar";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TextBox from "./components/TextBox";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #ededed;
`;

function App() {
  return (
    <Container>
      <EmptyBar value={20} />
      <Header />
      <EmptyBar value={30} />
      <InputBox />
      <EmptyBar value={10} />
      <TextBox />
    </Container>
  );
}

export default App;
