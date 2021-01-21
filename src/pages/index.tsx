import * as React from "react";
import Panel from "../components/Panel";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import Nøkkeltall, { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { Typografi } from "../styles/TypografiNyttDesign";
import CustomComponent, { CustomComponentProps } from "../components/CustomComponent";
import { ArtikkelI } from "../components/artikkel/types";
import ArtikkelPreview from "../components/artikkel/ArtikkelPreview";
import { Header } from "../components/forside/Header";
import SEO from "../components/SEO";

const landingssideQuery = groq`*[_id == "forside"][0] {
  overskrift,
  underoverskrift,
  bakgrunnsfarge,
  lysTekst,
  paneler[] {
    lysTekst,
    _key,
    bakgrunnsfarge,
    innhold->,
    id,
    _type
  }
}`;

const metadataQuery = groq`*[_id == "metadata"][0]`;

export interface MetadataI {
  description: string;
  previewImage: any;
  title: string;
}

interface Placeholder {
  _type: "placeholder";
  tittel: string;
}

type Innhold = NøkkeltallData | Placeholder | ArtikkelI;

interface PanelProps {
  _key: string;
  _type: "panel";
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
  innhold?: Innhold;
}

interface ForsideProps {
  data?: {
    overskrift: string;
    underoverskrift: string;
    bakgrunnsfarge?: string;
    lysTekst?: boolean;
    paneler?: (PanelProps | CustomComponentProps)[];
  };
  metaData?: MetadataI;
}

function getChildren(innhold?: Innhold) {
  if (!innhold) {
    return "Mangler innhold";
  }

  switch (innhold._type) {
    case "nokkeltall":
      return <Nøkkeltall {...innhold} />;
    case "placeholder":
      return innhold.tittel;
    case "artikkel":
      return <ArtikkelPreview {...innhold} />;
    default:
      // @ts-ignore
      return `Fant ikke innhold for ${innhold._type} 🤷‍♀️`;
  }
}

export default function Index(props: ForsideProps) {
  return (
    <>
      <Typografi />
      <SEO metadata={props.metaData} />
      <Header
        overskrift={props.data?.overskrift}
        underoverskrift={props.data?.underoverskrift}
        bakgrunnsfarge={props.data?.bakgrunnsfarge}
        lysTekst={props.data?.lysTekst}
      />

      {props.data?.paneler?.map((panel) =>
        panel._type === "customComponent" ? (
          <CustomComponent {...panel} key={panel.id} />
        ) : (
          <Panel
            key={panel._key}
            backgroundColor={panel.bakgrunnsfarge}
            lysTekst={panel.lysTekst}
            children={getChildren(panel.innhold)}
          />
        )
      )}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(landingssideQuery);
  const metaData = await getClient(preview).fetch(metadataQuery);
  return {
    props: {
      preview,
      data,
      metaData,
    },
    revalidate: 60,
  };
}
