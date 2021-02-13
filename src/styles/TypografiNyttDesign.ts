import { createGlobalStyle, css } from "styled-components";
import { navFrontend } from "./navFarger";

export const headerStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    line-height: 1;
  }
  h1 {
    font-size: clamp(2rem, 16vmin, 7rem);
  }
  h2 {
    font-size: clamp(1.5rem, 12vmin, 5rem);
  }
  h3 {
    font-size: clamp(1.25rem, 8vmin, 2.5rem);
  }
  h4 {
    font-size: clamp(1.1rem, 4vmin, 1.5rem);
  }
  h5 {
    font-size: clamp(1rem, 2.5vmin, 1.25rem);
  }
`;

export const Typografi = createGlobalStyle`
  
  ${headerStyles};
  
  a  {
    color: #d24b7b;
  }

  *:focus {
    box-shadow: 0 0 0 .2rem ${navFrontend.orangeFocus};
  }
`;
