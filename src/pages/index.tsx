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
import ForsideProvider from "../components/forside/ForsideProvider";

const landingssideQuery = groq`{
"forside": *[_id == "forside"][0] {
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
  },
"metaData": *[_id == "metadata"][0],
"bloggposter": *[_type == "blogpost"] | order(_createdAt desc) [0..4] {
    tittel,
    "slug": slug.current,
    _createdAt,
    "forfattere": forfattere[]->navn
  }
}`;

interface ForisdeBloggpostI {
  tittel: string;
  slug: string;
  _createdAt: string;
  forfattere: string[];
}

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

export interface ForsideProps {
  forside?: {
    overskrift: string;
    underoverskrift: string;
    bakgrunnsfarge?: string;
    lysTekst?: boolean;
    paneler?: (PanelProps | CustomComponentProps)[];
  };
  metaData?: MetadataI;
  bloggposter: ForisdeBloggpostI[];
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
    <ForsideProvider forsideProps={props}>
      <Typografi />
      <SEO metadata={props.metaData} />
      <Header
        overskrift={props.forside?.overskrift}
        underoverskrift={props.forside?.underoverskrift}
        bakgrunnsfarge={props.forside?.bakgrunnsfarge}
        lysTekst={props.forside?.lysTekst}
      />

      {props.forside?.paneler?.map((panel) =>
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
    </ForsideProvider>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(landingssideQuery);
  return {
    props: {
      preview,
      ...data,
    },
    revalidate: 60,
  };
}
