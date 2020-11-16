import { createGlobalStyle } from "styled-components";
import { navFrontend } from "./navFarger";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: darkslategray;
  }
  
  html {
    font-size: 112.5%;
    font-weight: 300;
  }

  * {
    box-sizing: border-box;
    line-height: 1.3;
  }
  
  *:focus {
    outline: none;
    box-shadow: 0 0 0 .2rem ${navFrontend.orangeFocus};
  }
`;
