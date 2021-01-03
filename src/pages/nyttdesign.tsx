import * as React from "react";
import Panel from "../components/Panel";
import Githubstats from "./githubstats";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import HvemViEr from "../components/HvemViEr";
import Nøkkeltall, { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { Typografi } from "../styles/TypografiNyttDesign";

const landingssideQuery = groq`*[_id == "landingsside"][0] {
  paneler[] {
    lysTekst,
    _key,
    bakgrunnsfarge,
    innhold->
  }
}`;

interface Placeholder {
  _type: "placeholder";
  title: string;
}

type Innhold = NøkkeltallData | Placeholder;

interface Panel {
  _key: string;
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
  innhold?: Innhold;
}

interface Props {
  data?: {
    paneler?: Panel[];
  };
}

function getChildren(innhold?: Innhold) {
  if (!innhold) {
    return "Mangler innhold";
  }

  switch (innhold._type) {
    case "nokkeltall":
      return <Nøkkeltall {...innhold} />;
    case "placeholder":
      return innhold.title;
    default:
      // @ts-ignore
      return `Fant ikke innhold for ${innhold._type} 🤷‍♀️`;
  }
}

export default function NyttDesign(props: Props) {
  return (
    <>
      <Typografi />
      {props.data?.paneler?.map((panel) => (
        <Panel
          backgroundColor={panel.bakgrunnsfarge}
          fontColor={panel.lysTekst ? "#FFF" : "#333"}
          children={getChildren(panel.innhold)}
        />
      ))}
      <HvemViEr />
      <Githubstats />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(landingssideQuery);
  return {
    props: {
      preview,
      data,
    },
    revalidate: 60,
  };
}
