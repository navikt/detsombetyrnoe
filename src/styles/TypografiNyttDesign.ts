import { createGlobalStyle, css } from "styled-components";
import { navFrontend } from "./navFarger";

export const fontSize = {
  h1: css`
    font-size: clamp(2rem, 16vmin, 7rem);
  `,
  h2: css`
    font-size: clamp(1.5rem, 12vmin, 5rem);
  `,
  h3: css`
    font-size: clamp(1.25rem, 8vmin, 2.5rem);
  `,
  h4: css`
    font-size: clamp(1.1rem, 4vmin, 1.5rem);
  `,
  h5: css`
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
    line-height: 1.5;
  }
  h1 {
    ${fontSize.h1};
  }
  h2 {
    ${fontSize.h2};
  }
  h3 {
    ${fontSize.h3};
  }
  h4 {
    ${fontSize.h4};
  }
  h5 {
    ${fontSize.h5};
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
