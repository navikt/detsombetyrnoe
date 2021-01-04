import * as React from "react";
import styled from "styled-components/macro";
import Panel from "./Panel";
import Parallax from "./Parallax";

const Style = styled.div`
  padding: 0 10% 0 15%;
`;

const Tekst = styled.div`
  padding-right: 20%;
  p {
    margin: 2rem 0;
  }
`;

const Bilder = styled.div`
  position: relative;
  height: 40vw;
  img {
    height: 30vw;
    width: 40vw;
  }
`;

function HvemViEr() {
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
        <Bilder>
          <Parallax speedY={-5} speedX={5} style={{ position: "absolute", bottom: 0, left: 0 }}>
            <img src="https://source.unsplash.com/800x600?office" />
          </Parallax>
          <Parallax speedY={5} speedX={-5} style={{ position: "absolute", top: 0, right: 0 }}>
            <img src="https://source.unsplash.com/800x600?adventure" />
          </Parallax>
        </Bilder>
      </Style>
    </Panel>
  );
}

export default HvemViEr;
