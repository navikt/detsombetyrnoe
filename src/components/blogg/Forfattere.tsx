import * as React from "react";
import { urlFor } from "../../lib/sanity";
import { Forfatter as ForfatterInterface } from "src/lib/services/sanity/model/forfatter/forfatterQuery";
import styled from "styled-components";
import Link from "next/link";

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
  height: calc(1.5rem + 4vmin);
`;

const StyledA = styled.a`
  display: inline-block;
  color: #333;
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

function Forfatter(props: { forfatter: ForfatterInterface; lenke?: boolean }) {
  const content = (
    <ForfatterStyle>
      <ForfatterImage src={urlFor(props.forfatter.mainImage).height(100).width(100).url() || ""} alt="" />
      <p>{props.forfatter.navn}</p>
    </ForfatterStyle>
  );

  if (props.lenke) {
    return (
      <Link href={`/forfatter/${props.forfatter.slug}`} legacyBehavior>
        <StyledA>{content}</StyledA>
      </Link>
    );
  }

  return content;
}

function Forfattere(props: { forfattere?: ForfatterInterface[]; className?: string; lenkeTilForfatterside?: boolean }) {
  return (
    <div className={props.className}>
      {props.forfattere?.map((forfatter) => (
        <Forfatter key={forfatter.navn} forfatter={forfatter} lenke={props.lenkeTilForfatterside} />
      ))}
    </div>
  );
}

export default Forfattere;
