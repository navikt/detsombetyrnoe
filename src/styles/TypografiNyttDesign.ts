import { createGlobalStyle } from "styled-components";

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
  color: #FF6AA0;
}
`;
