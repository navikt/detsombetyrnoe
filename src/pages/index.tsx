import * as React from "react";
import { groq, VisualEditing } from "next-sanity";
import { NøkkeltallData } from "../components/nøkkeltall/Nøkkeltall";
import { CustomComponentProps } from "../components/CustomComponent";
import { ArtikkelI } from "../components/artikkel/types";
import PreviewBanner from "../components/PreviewBanner";
import Forside from "../../sanity/components/forside/Forside";
import { metaDataGroq } from "../utils/groq";
import { sanityFetch } from "src/lib/services/sanity/fetch";

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

export interface TekstblokkProps {
  _key: string;
  _type: "tekstblokk";
  overskrift: string;
  bakgrunnsfarge?: string;
  lysTekst?: boolean;
  tekst?: any;
  artikkel?: ArtikkelI;
}

export interface UtviklerHeleNorge {
  sted: string;
  geopoint: { lat: number; lng: number };
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
    utviklereHeleNorge: UtviklerHeleNorge[];
  };
  metaData: MetadataI;
  bloggposter: ForisdeBloggpostI[];
  stillinger: StillingI[];
}

export async function getStaticProps(context: { draftMode: any }) {
  const data = await sanityFetch({
    query: landingssideQuery,
    perspective: context.draftMode ? "previewDrafts" : "published",
  });
  return {
    props: {
      data,
      isDraft: context.draftMode ?? false,
    },
    revalidate: 60,
  };
}

const PreviewWrapper = (props: { data: ForsideProps; isDraft: boolean }) => {
  return (
    <>
      {props.isDraft && (
        <>
          <div>
            <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable preview mode
            </a>
          </div>
          <PreviewBanner />
          <VisualEditing />
        </>
      )}
      <Forside {...props.data} />
    </>
  );
};

export default PreviewWrapper;
