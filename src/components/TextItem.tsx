import { useEffect, useRef } from "react";
import styled from "styled-components";
import type { Emotion, SuccessDTO } from "../api/customAPI";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 96px;
`;
const Text = styled.div`
  position: absolute;
  left: 0;
  width: fit-content;
  height: fit-content;
  margin: 10px 40px;
  padding: 20px 30px;
  background: #2157bf;
  color: white;
  border-radius: 12px;
`;
const FilteringText = styled.div`
  position: absolute;
  right: 0;
  width: fit-content;
  height: fit-content;
  margin: 10px 40px;
  padding: 20px 30px;
  background: #bf2121;
  color: white;
  border-radius: 12px;
`;

function TextItem({ item }: { item: SuccessDTO }) {
  const text = useRef<HTMLDivElement>(null);

  function compare(a: Emotion, b: Emotion) {
    return b.start - a.start;
  }

  useEffect(() => {
    if (item.isFiltering === "false") {
      if (text.current && item.emotion) {
        const e = item.emotion.sort(compare);
        let t = item.text;
        e.forEach((ele) => {
          if (ele.type === "positive") {
            const arr = t.split("");
            arr.splice(
              ele.start,
              ele.end - ele.start,
              `<span class="light po">${t
                .split("")
                .slice(ele.start, ele.end)
                .join("")}</span>`
            );
            t = arr.join("");
          } else {
            const arr = t.split("");
            arr.splice(
              ele.start,
              ele.end - ele.start,
              `<span class="light ne">${t
                .split("")
                .slice(ele.start, ele.end)
                .join("")}</span>`
            );
            t = arr.join("");
          }
        });
        text.current.innerHTML = t;
      }
    }
  }, [text, item]);

  return (
    <Container>
      {item.isFiltering === "true" ? (
        <FilteringText ref={text}>{item.text}</FilteringText>
      ) : (
        <Text ref={text}>{item.text}</Text>
      )}
    </Container>
  );
}

export default TextItem;
