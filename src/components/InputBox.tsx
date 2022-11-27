import React, { useState } from "react";
import styled from "styled-components";
import useResultStore from "../stores/resultStore";
import { fetchAnalyze } from "../api/customAPI";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid #2157bf;
  border-radius: 22.5px;
  overflow: hidden;

  & input {
    width: 90%;
    height: 90%;
    border: none;
    font-size: 1rem;
    text-align: center;

    &:focus {
      outline: none;
    }
  }
  & button {
    width: 11%;
    height: 100%;
    font-size: 1rem;
    background: #2157bf;
    color: white;
    border: none;
  }
`;

function InputBox() {
  const [text, setText] = useState("");
  const { addResult } = useResultStore();

  function textChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  async function analyze() {
    const response = await fetchAnalyze(text);
    if (!("error" in response)) {
      console.log(response);
      addResult(response);
    } else {
      console.log(response);
    }
    setText("");
  }
  return (
    <Container>
      <Content>
        <input type="text" onChange={textChange} value={text} />
        <button onClick={analyze}>분석</button>
      </Content>
    </Container>
  );
}

export default InputBox;
