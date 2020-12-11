import * as React from "react";
import { groq } from "next-sanity";
import { NøkkeltallListe, NøkkeltallTekst } from "./types";
import { usePreviewSubscription } from "../../lib/sanity";
import Panel from "../Panel";
import Tall from "./Tall";
import styled from "styled-components";

interface Data {
  nokkeltall?: (NøkkeltallTekst | NøkkeltallListe)[];
}

const frontpageQuery = groq`*[_id == "nokkeltall"][0]
{
    nokkeltall
}`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  grid-gap: 4rem;
  max-width: 80rem;
`;

function Nøkkeltall() {
  const { data, error, loading } = usePreviewSubscription<Data>(frontpageQuery, {
    initialData: undefined,
    enabled: true,
  });

  return (
    <Panel backgroundColor={"white"} fontColor="black" spinner={loading}>
      <StyledUl>
        {data?.nokkeltall?.map((tall) => (
          <Tall nøkkeltall={tall} />
        ))}
      </StyledUl>
    </Panel>
  );
}

export default Nøkkeltall;
