import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { CustomComponentProps } from "src/components/CustomComponent";
import { LandingPage } from "src/components/landingPage/LandingPage";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { PanelProps, TekstblokkProps } from "src/app/(site)/page";
import { Metadata } from "src/lib/services/sanity/model/metadata/metadataQuery";

const landingssideQuery = groq`
{
    "landingPage": *[_type == "landingPage" && slug.current == "jobb-med-sikkerhet"][0] {
        overskrift,
        underoverskrift,
        lysTekst,
        paneler[] {
          lysTekst,
          lysBakgrunn,
          _key,
          innhold->,
          tekst,
          overskrift,
          artikkel->,
          id,
          _type
        }
      },
      "metaData": *[_id == "metadata"][0]{
        ...,
        privacyArticle->{
          tittel,
          "slug": slug.current
        }
      },
}`;

export interface LandingssideProps {
  landingPage?: {
    overskrift: string;
    underoverskrift: string;
    lysTekst?: boolean;
    paneler?: (PanelProps | CustomComponentProps | TekstblokkProps)[];
    previewImage?: string;
  };
  metaData: Metadata;
}

const Page = async () => {
  const page = await sanityFetch<LandingssideProps>({ query: landingssideQuery });

  if (!page) {
    return notFound();
  }

  return <LandingPage {...page} />;
};

export default Page;
