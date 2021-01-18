import * as React from "react";
import { urlFor } from "../../lib/sanity";
import { ForfatterI } from "../../pages/blogg";
import styled from "styled-components/macro";

const ForfatterStyle = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  p {
    margin-left: 0.5rem;
  }
`;

const ForfatterImage = styled.img`
  border-radius: 50%;
`;

function Forfattere(props: { forfattere: ForfatterI[]; className?: string }) {
  return (
    <div className={props.className}>
      {props.forfattere.map((forfatter) => (
        <ForfatterStyle key={forfatter._id}>
          <ForfatterImage src={urlFor(forfatter.mainImage).height(50).width(50).url() || ""} alt="" />
          <p>{forfatter.navn}</p>
        </ForfatterStyle>
      ))}
    </div>
  );
}

export default Forfattere;