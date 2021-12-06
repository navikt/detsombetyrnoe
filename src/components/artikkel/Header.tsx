import * as React from "react";
import styled from "styled-components";
import NavLogo from "../../ikoner/navlogo";
import Link from "next/link";
import { navFrontend } from "../../styles/navFarger";

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a,
  a:visited {
    color: ${navFrontend.navBlaDarken20};
    font-weight: 400;
  }
  svg {
    width: 4rem;
    fill: ${navFrontend.navRod};
  }
`;

function Header() {
  return (
    <Style>
      <Link href="/">
        <a>Tilbake til forsiden</a>
      </Link>
      <a href="https://www.nav.no/" aria-label="Lenke til NAV">
        <NavLogo />
      </a>
    </Style>
  );
}

export default Header;
