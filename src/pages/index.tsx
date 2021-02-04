import * as React from "react";
import { getClient, usePreviewSubscription } from "../lib/sanity";
import { groq } from "next-sanity";
import { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { CustomComponentProps } from "../components/CustomComponent";
import { ArtikkelI } from "../components/artikkel/types";
import { useRouter } from "next/router";
import Error from "next/error";
import PreviewBanner from "../components/PreviewBanner";
import Bloggside from "../components/blogg/BloggPost";
import { BlogpostData } from "./blogg/[slug]";
import Forside from "../../sanity/components/forside/Forside";

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

export interface PanelProps {
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

const PreviewWrapper = (props: { data: ForsideProps; preview?: boolean }) => {
  const router = useRouter();
  const enablePreview = !!props.preview || !!router.query.preview;

  const { data } = usePreviewSubscription(landingssideQuery, {
    initialData: props.data,
    enabled: enablePreview,
  });

  return (
    <>
      {enablePreview && <PreviewBanner />}
      <Forside {...data} />
    </>
  );
};

export default PreviewWrapper;
