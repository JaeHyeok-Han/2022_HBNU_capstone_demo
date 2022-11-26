import styled from "styled-components";

const Container = styled.div<{ value: number }>`
  width: 100%;
  height: ${(prop) => prop.value + "px"};
`;

function EmptyBar({ value }: { value: number }) {
  return <Container value={value} />;
}

export default EmptyBar;
