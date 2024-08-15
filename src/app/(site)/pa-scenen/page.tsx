import { groq } from "next-sanity";
import { PaScenenPreview } from "src/components/PaScenenPreview";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { MetadataI } from "src/app/(site)/page";
import { metaDataGroq } from "src/utils/groq";

export interface LandingssideProps {
  landingPage?: {
    overskrift: string;
    underoverskrift: string;
    fetUnderskrift?: string;
    bakgrunnsfarge?: string;
    lysTekst?: boolean;
    paneler?: NavPaScenen[];
    previewImage?: any;
  };
  metaData: MetadataI;
}

export interface NavPaScenen {
  tittel: string;
  url: string;
  event?: string;
  foredragsholdere: Foredragsholder[];
}

export interface Foredragsholder {
  navn: string;
  sosialeMedier: string[];
}

const landingssideQuery = groq`
{
    "landingPage": *[_type == "landingPage" && slug.current == "pa-scenen"][0] {
        overskrift,
        underoverskrift,
        fetUnderskrift,
        bakgrunnsfarge,
        lysTekst,
        previewImage,
        paneler[] {
          _key,
          id,
          _type,
          tittel,
          event,
          foredragsholdere[]-> {
            navn,
            mainImage,
            "slug": slug.current,
            "sosialeMedier": sosiale_medier[],
          }
        }
      },
    ${metaDataGroq},
}`;

const Page = async () => {
  const data = await sanityFetch<LandingssideProps>({ query: landingssideQuery });

  return <PaScenenPreview data={data} />;
};

export default Page;
