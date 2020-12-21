import * as basicScroll from "basicscroll";
import * as React from "react";
import styled from "styled-components/macro";
import Panel from "./Panel";
import { useRef } from "react";
import { useMount } from "react-use";

const Style = styled.div`
  padding: 0 10% 0 15%;
`;

const Tekst = styled.div`
  padding-right: 20%;
  p {
    margin: 2rem 0;
  }
  a {
  }
`;

const Bilder = styled.div`
  position: relative;
  height: 40vw;
`;

const Bilde = styled.img`
  height: 30vw;
  width: 40vw;
  position: absolute;
  transition: 0.3s ease-out;
  &:first-child {
    background-color: gray;
    left: 0;
    bottom: 0;
    transform: translate(var(--positive), var(--positive));
  }
  &:last-child {
    background-color: darkgray;
    right: 0;
    top: 0;
    transform: translate(var(--negative), var(--negative));
  }
`;

function HvemViEr() {
  const ref = useRef<HTMLDivElement>(null);

  useMount(() => {
    const basicScrollInstance = basicScroll.create({
      elem: ref.current,
      from: "middle-bottom",
      to: "bottom-top",
      direct: true,
      props: {
        "--positive": {
          from: "0",
          to: "10%",
        },
        "--negative": {
          from: "0",
          to: "-10%",
        },
      },
    });
    basicScrollInstance.start();
    return () => basicScrollInstance.destroy();
  });

  return (
    <Panel backgroundColor={"#F1F1F1"} fontColor="black">
      <Style>
        <Tekst>
          <h2>Hvem vi er</h2>
          <p>
            NAV IT. Vi er en noen av de beste teknologer, designere og rådgivere som liker å løse problemer. Og utvikle
            for det gode. Vi tror på å skape et inkluderende miljø som bringer frem det beste i folk.
          </p>
          <a href="">Mer om oss</a>
        </Tekst>
        <Bilder ref={ref}>
          <Bilde src="https://source.unsplash.com/800x600?adventure" />
          <Bilde src="https://source.unsplash.com/800x600?office" />
        </Bilder>
      </Style>
    </Panel>
  );
}

export default HvemViEr;
