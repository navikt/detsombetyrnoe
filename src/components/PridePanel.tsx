import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    max-width: 100%;
  }
`;

const ColoredLine = styled.div<{ color: string }>`
  --background-color: ${(props) => props.color};
  background-color: var(--background-color);
  width: 100%;
  height: 2rem;
`;

export const PridePanel = () => (
  <Style>
    <ColoredLine color="#E50000" />
    <ColoredLine color="#FF8D00" />
    <ColoredLine color="#FFEE00" />
    <ColoredLine color="#028121" />
    <ColoredLine color="#004CFF" />
    <ColoredLine color="#770088" />
  </Style>
);
