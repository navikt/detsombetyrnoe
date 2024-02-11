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

function Footer({ isSikkerhet }: { isSikkerhet?: boolean }) {
  return (
    <Style>
      <Link href={isSikkerhet ? "/jobb-med-sikkerhet" : "/"}>Tilbake til forsiden</Link>
    </Style>
  );
}

export default Footer;
