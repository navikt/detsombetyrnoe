import * as React from "react";
import { useMount } from "react-use";
import * as basicScroll from "basicscroll";
import { CSSProperties, ReactNode, useRef } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  speedX?: number;
  speedY?: number;
  className?: string;
  style?: CSSProperties;
};

const Style = styled.div`
  transition: 0.5s ease-out;
  transform: translate(var(--xSpeed), var(--ySpeed));
`;

function Parallax(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useMount(() => {
    const xSpeed = props.speedX ?? 0;
    const ySpeed = props.speedY ?? 5;
    const basicScrollInstance = basicScroll.create({
      elem: ref.current,
      from: "middle-bottom",
      to: "bottom-top",
      direct: true,
      props: {
        "--xSpeed": {
          from: "0",
          to: xSpeed + "em",
        },
        "--ySpeed": {
          from: "0",
          to: -ySpeed + "em",
        },
      },
    });
    basicScrollInstance.start();
    return () => basicScrollInstance.destroy();
  });

  return (
    <Style ref={ref} className={props.className} style={props.style}>
      {props.children}
    </Style>
  );
}

export default Parallax;
