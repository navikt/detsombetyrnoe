import * as React from "react";
import { groq } from "next-sanity";
import { NøkkeltallListe, NøkkeltallTekst } from "./types";
import { useSWRSanity } from "../../lib/sanity";
import Panel from "../Panel";
import Tall from "./Tall";
import styled from "styled-components";

interface Data {
  nokkeltall?: (NøkkeltallTekst | NøkkeltallListe)[];
}

const query = groq`*[_id == "nokkeltall"][0]
{
    nokkeltall
}`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  @media (min-width: 80rem) {
    grid-template-columns: repeat(4, 15rem);
  }
  grid-gap: 4rem;
`;

export default function Nøkkeltall() {
  const { data, error } = useSWRSanity<Data>(query);

  if (error) {
    return <div>Det skjedde en feil 🤷‍♀️</div>;
  }

  return (
    <Panel backgroundColor={"white"} fontColor="black" spinner={!data}>
      <StyledUl>
        {data?.nokkeltall?.map((tall) => (
          <Tall key={tall._key} nøkkeltall={tall} />
        ))}
      </StyledUl>
    </Panel>
  );
}
