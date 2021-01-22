import * as React from "react";
import styled from "styled-components/macro";
import Link from "next/link";

const Style = styled.a<{ fontSize: string }>`
  display: inline-block;
  text-decoration: none;
  font-size: ${(props) => props.fontSize};
  margin-bottom: 1rem;
  color: inherit !important;
  .blogg {
    font-weight: 300;
    display: block;
    margin-left: 1em;
    margin-top: -0.35em;
    font-size: 1.5em;
  }
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 2em;
`;

function Header(props: { fontSize: string; h1?: boolean }) {
  return (
    <Link href="/blogg">
      <Style fontSize={props.fontSize}>
        <Heading as={props.h1 ? "h1" : "div"}>
          <span>NAV IT</span>
          <span className="blogg">Blogg.</span>
        </Heading>
      </Style>
    </Link>
  );
}

export default Header;
