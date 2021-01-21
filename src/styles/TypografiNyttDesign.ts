import { createGlobalStyle } from "styled-components";
import { navFrontend } from "./navFarger";

export const Typografi = createGlobalStyle`
  h1, h2, h3, h4, h5 {
    font-weight: bold;
    line-height: .8;
  }
  h1 {
    font-size: 7rem;
  }
  h2 {
    font-size: 5rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  a  {
    color: #d24b7b;
  }

  *:focus {
    box-shadow: 0 0 0 .2rem ${navFrontend.orangeFocus};
  }
`;
