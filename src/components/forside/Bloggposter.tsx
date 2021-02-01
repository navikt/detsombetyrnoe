import * as React from "react";
import styled from "styled-components/macro";
import Header from "../blogg/Header";
import { useForsideContext } from "./ForsideProvider";
import { ForsideProps } from "../../pages";
import Link from "next/link";
import { formatterDato } from "../../utils/formatterDato";

const Style = styled.div`
  max-width: 40rem;
`;

const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin-top: 1rem;
`;

const StyledOl = styled.ol``;

function Bloggposter() {
  const bloggposter = useForsideContext().bloggposter;

  return (
    <Style>
      <Header fontSize={"1rem"} />
      <H2>Siste innlegg fra bloggen:</H2>
      <StyledOl>
        {bloggposter?.map((bloggpost) => (
          <Post key={bloggpost.slug} bloggpost={bloggpost} />
        ))}
      </StyledOl>
    </Style>
  );
}

const StyledLi = styled.div`
  margin: 2rem 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  &:hover h3 {
    text-decoration: underline;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
  time {
    font-style: italic;
  }
  p {
    font-size: 0.9rem;
  }
`;

function Post(props: { bloggpost: ForsideProps["bloggposter"][0] }) {
  return (
    <StyledLi>
      <Link href={`/blogg/${props.bloggpost.slug}`} passHref>
        <StyledLink>
          <h3>{props.bloggpost.tittel}</h3>
          <p>
            <span>{props.bloggpost.forfattere.join(" & ")}</span> -{" "}
            <time>{formatterDato(props.bloggpost._createdAt)}</time>
          </p>
        </StyledLink>
      </Link>
    </StyledLi>
  );
}

export default Bloggposter;
