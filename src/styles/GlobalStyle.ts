import { createGlobalStyle } from "styled-components";
import { navFrontend } from "./navFarger";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 112.5%;
    @media (min-width: 1000px) {
      font-size: 125%;
    }
    font-weight: 300;
    background-color: ${navFrontend.navBlaDarken80};
    color: #333;
  }
  
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: white;
  }

  * {
    box-sizing: border-box;
    line-height: 1.4;
  }
  
  *:focus {
    outline: none;
    box-shadow: 0 0 0 .2rem ${navFrontend.fokusFarge};
  }
  
  img {
    width: 100%;
    display: block;
  }
`;
