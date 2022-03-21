import styled from "styled-components";

export const CardItem = styled.li`
  margin: 2rem 0;
  transition: 0.3s;
  padding: 2vmin;
  position: relative;

  &:hover {
    box-shadow: 0 0 0.5rem #888;
    transform: scale(1.02);
  }
  a {
    display: block;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  i {
    color: #333;
  }
`;
