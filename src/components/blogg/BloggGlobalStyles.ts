import { createGlobalStyle } from "styled-components";
import { navFrontend } from "../../styles/navFarger";

export const BloggGlobalStyles = createGlobalStyle`
  html {
    *:focus {
      outline: none;
      box-shadow: 0 0 0 .2rem ${navFrontend.fokusFarge};
    }
    
    a, a:visited {
      color: #444;
    }
  } 
`;
