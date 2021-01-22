import * as React from "react";
import styled from "styled-components/macro";
import { ForfatterI } from "../pages/forfatter/[slug]";
import { urlFor } from "../lib/sanity";
import BloggPostPreview from "./blogg/BloggPostPreview";

const Style = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
`;

const Navnelinje = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-weight: 300;
  }
`;

const Portrett = styled.img`
  border-radius: 50%;
  margin-right: 2rem;
`;

const Bio = styled.div`
  margin: 1rem 0;
`;

const Innlegg = styled.div`
  margin: 2rem 0 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const StyledH2 = styled.h2`
  font-weight: 400;
  margin: 4rem 0 2rem;
`;

function Forfatter(props: ForfatterI) {
  return (
    <Style>
      <Navnelinje>
        <Portrett src={urlFor(props.mainImage).width(200).height(200).url() || ""} alt="" />
        <h1>{props.navn}</h1>
      </Navnelinje>
      <Bio>{props.bio}</Bio>
      <StyledH2>Blogginnlegg fra daniel:</StyledH2>
      <Innlegg>
        {props.blogposts?.map((post) => (
          <BloggPostPreview post={post} />
        ))}
      </Innlegg>
    </Style>
  );
}

export default Forfatter;
