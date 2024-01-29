import { groq } from "next-sanity";
import { useRouter } from "next/router";
import React from "react";
import { ForsideProps, MetadataI, PanelProps, TekstblokkProps } from ".";
import { CustomComponentProps } from "../components/CustomComponent";
import { LandingPage } from "../components/landingPage/LandingPage";
import PreviewBanner from "../components/PreviewBanner";
import { sanityClient, usePreviewSubscription } from "../lib/sanity";

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
          id,
          _type
        }
      },
    "metaData": *[_id == "metadata"][0],
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

export async function getStaticProps() {
  const data = await sanityClient.fetch(landingssideQuery);
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

const PreviewWrapper = (props: { data: LandingssideProps }) => {
  const router = useRouter();
  const enablePreview = !!router.query.preview;

  const { data } = usePreviewSubscription(landingssideQuery, {
    initialData: props.data,
    enabled: enablePreview,
  });

  return (
    <>
      {enablePreview && <PreviewBanner />}
      {data.landingPage && <LandingPage {...data} />}
    </>
  );
};

export default PreviewWrapper;
