import * as React from "react";
import { sanityClient, usePreviewSubscription } from "../lib/sanity";
import { groq } from "next-sanity";
import { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { CustomComponentProps } from "../components/CustomComponent";
import { ArtikkelI } from "../components/artikkel/types";
import { useRouter } from "next/router";
import PreviewBanner from "../components/PreviewBanner";
import Forside from "../../sanity/components/forside/Forside";
import { metaDataGroq } from "../utils/groq";

const landingssideQuery = groq`{
"forside": *[_id == "forside"][0] {
    overskrift,
    underoverskrift,
    bakgrunnsfarge,
    "bakgrunnsvideo": bakgrunnsvideo.asset->url,
    "bakgrunnsvideoWebm": bakgrunnsvideoWebm.asset->url,
    lysTekst,
    paneler[] {
      lysTekst,
      _key,
      bakgrunnsfarge,
      innhold->,
      id,
      _type
    },
    utviklereHeleNorge[] {
      sted,
      geopoint {
        lat,
        lng
      }
    }
  },
${metaDataGroq},
"bloggposter": *[_type == "blogpost"] | order(_createdAt desc) [0..4] {
    tittel,
    "slug": slug.current,
    _createdAt,
    "forfattere": forfattere[]->navn
  },
"stillinger": *[_type == "stilling" && frist >= string::split(now(), "T")[0]] | order(frist asc) {
    title,
    description,
    url,
    frist
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
  privacyArticle: {
    tittel: string;
    slug: string;
  };
}

interface Placeholder {
  _type: "placeholder";
  tittel: string;
}

export interface StillingI {
  title: string;
  description: string;
  url: string;
  frist: string;
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
    bakgrunnsvideo?: string;
    bakgrunnsvideoWebm?: string;
    bakgrunnsfarge?: string;
    lysTekst?: boolean;
    paneler?: (PanelProps | CustomComponentProps)[];
    utviklereHeleNorge: [{ sted: string; geopoint: { lat: number; lng: number } }];
  };
  metaData: MetadataI;
  bloggposter: ForisdeBloggpostI[];
  stillinger: StillingI[];
}

export async function getStaticProps() {
  const data = await sanityClient.fetch(landingssideQuery);
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

const PreviewWrapper = (props: { data: ForsideProps }) => {
  const router = useRouter();
  const enablePreview = !!router.query.preview;

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
