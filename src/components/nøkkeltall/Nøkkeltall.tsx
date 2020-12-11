import * as React from "react";
import { groq } from "next-sanity";
import { NøkkeltallListe, NøkkeltallTekst } from "./types";
import { getClient, usePreviewSubscription } from "../../lib/sanity";
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

function Nøkkeltall({ data: initialData, preview }: any) {
  const { data, error, loading } = usePreviewSubscription<Data>(query, {
    initialData: initialData,
    enabled: preview,
  });

  if (error) {
    return <div>Det skjedde en feil 🤷‍♀️</div>;
  }

  return (
    <Panel backgroundColor={"white"} fontColor="black" spinner={loading}>
      <StyledUl>
        {data?.nokkeltall?.map((tall) => (
          <Tall key={tall._key} nøkkeltall={tall} />
        ))}
      </StyledUl>
    </Panel>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(query);
  return {
    props: {
      preview,
      data,
    },
    revalidate: 60,
  };
}

export default Nøkkeltall;
