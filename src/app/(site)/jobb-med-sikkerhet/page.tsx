import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { CustomComponentProps } from "src/components/CustomComponent";
import { LandingPage } from "src/components/landingPage/LandingPage";
import { client } from "src/lib/services/sanity/client";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { MetadataI, PanelProps, TekstblokkProps } from "src/app/(site)/page";

const landingssideQuery = groq`
{
    "landingPage": *[_type == "landingPage" && slug.current == "jobb-med-sikkerhet"][0] {
        overskrift,
        underoverskrift,
        bakgrunnsfarge,
        lysTekst,
        paneler[] {
          lysTekst,
          _key,
          bakgrunnsfarge,
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
    bakgrunnsfarge?: string;
    lysTekst?: boolean;
    paneler?: (PanelProps | CustomComponentProps | TekstblokkProps)[];
    previewImage?: string;
  };
  metaData: MetadataI;
}

const Page = async () => {
  const page = await sanityFetch<LandingssideProps>({ query: landingssideQuery });

  if (!page) {
    return notFound();
  }

  return <LandingPage {...page} />;
};

export default Page;
