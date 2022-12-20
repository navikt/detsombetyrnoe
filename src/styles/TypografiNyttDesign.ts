import { createGlobalStyle, css } from "styled-components";
import { navFrontend } from "./navFarger";

export const fontSize = {
  s1: css`
    font-size: clamp(2rem, 16vmin, 7rem);
  `,
  s2: css`
    font-size: clamp(1.5rem, 12vmin, 2.5rem);
  `,
  s3: css`
    font-size: clamp(1.25rem, 8vmin, 2rem);
  `,
  s4: css`
    font-size: clamp(1.1rem, 4vmin, 1.5rem);
  `,
  s5: css`
    font-size: clamp(1rem, 2.5vmin, 1.25rem);
  `,
};

export const headerStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }
  h1 {
    ${fontSize.s1};
    line-height: 1;
  }
  h2 {
    ${fontSize.s2};
    line-height: 1.1;
  }
  h3 {
    ${fontSize.s3};
    line-height: 1.2;
  }
  h4 {
    ${fontSize.s4};
    line-height: 1.3;
  }
  h5 {
    ${fontSize.s5};
    line-height: 1.4;
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
