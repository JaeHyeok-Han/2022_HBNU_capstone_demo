import styled from "styled-components";
import useResultStore from "../stores/resultStore";
import TextItem from "./TextItem";

const Container = styled.div`
  width: 100%;
`;

function TextBox() {
  const { result } = useResultStore();

  return (
    <Container>
      {result.map((ele, index) => (
        <TextItem key={index} item={ele} />
      ))}
    </Container>
  );
}

export default TextBox;
