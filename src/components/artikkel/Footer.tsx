import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { navFrontend } from "../../styles/navFarger";

const Style = styled.footer`
  a,
  a:visited {
    color: ${navFrontend.navBlaDarken20};
    font-weight: 400;
  }
`;

function Footer() {
  return (
    <Style>
      <Link href="/">
        <a>Tilbake til forsiden</a>
      </Link>
    </Style>
  );
}

export default Footer;
