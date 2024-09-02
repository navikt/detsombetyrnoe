import { groq } from "next-sanity";
import { Forside } from "../../../sanity/components/forside/Forside";
import { ArtikkelI } from "src/components/artikkel/types";
import { CustomComponentProps } from "src/components/CustomComponent";
import { NøkkeltallData } from "src/components/nøkkeltall/Nøkkeltall";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { urlFor } from "src/lib/sanity";
import { getMetaData, Metadata, metaDataGroq } from "src/lib/services/sanity/model/metadata/metadataQuery";

const landingssideQuery = groq`{
    "forside": *[_id == "forside"][0] {
        overskrift,
        underoverskrift,
        "bakgrunnsvideo": bakgrunnsvideo.asset->url,
        "bakgrunnsvideoWebm": bakgrunnsvideoWebm.asset->url,
        lysTekst,
        paneler[] {
          lysTekst,
          lysBakgrunn,
          _key,
          innhold->,
          id,
          title,
          url,
          heading,
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
    "metaData": ${metaDataGroq},
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
  lysTekst?: boolean;
  lysBakgrunn?: boolean;
  innhold?: Innhold;
}

export interface TekstblokkProps {
  _key: string;
  _type: "tekstblokk";
  overskrift: string;
  lysBakgrunn?: boolean;
  lysTekst?: boolean;
  tekst?: any;
  artikkel?: ArtikkelI;
}

export interface VideoProps {
  _key: string;
  _type: "video";
  url: string;
  title: string;
  heading?: string;
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
    lysTekst?: boolean;
    paneler?: (PanelProps | CustomComponentProps | VideoProps)[];
    utviklereHeleNorge: UtviklerHeleNorge[];
  };
  metaData: Metadata;
  bloggposter: ForisdeBloggpostI[];
  stillinger: StillingI[];
}

export const generateMetadata = async () => {
  const metadata = await getMetaData();
  return {
    title: metadata.title,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: urlFor(metadata?.previewImage).width(600).height(300).url() || "",
          width: 600,
          height: 300,
          alt: metadata.title,
        },
      ],
      site_name: metadata.title,
    },
  };
};

const Page = async () => {
  const data = await sanityFetch<ForsideProps>({
    query: landingssideQuery,
  });

  return <Forside {...data} />;
};

export default Page;
