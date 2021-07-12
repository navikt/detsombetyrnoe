import groq from "groq";
import { sanityClient, usePreviewSubscription } from "../lib/sanity";
import { ArtikkelI } from "../components/artikkel/types";
import Artikkel from "../components/artikkel/Artikkel";
import { useRouter } from "next/router";
import Error from "next/error";
import PreviewBanner from "../components/PreviewBanner";
import { GetStaticPaths, GetStaticProps } from "next";

const allArtikkelPathsQuery = groq`*[_type == "artikkel"][].slug.current`;

export const getStaticPaths: GetStaticPaths = async () => {
  const data: string[] = await sanityClient.fetch(allArtikkelPathsQuery);

  return {
    paths: data.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

const artikkelQuery = groq`
*[_type == "artikkel" && slug.current == $slug][0]{
  ...,
  innhold[]{
    ...,
    markDefs[]{
      ...,
      _type == 'filopplasting' => {
        "url": @.asset->url,
        "filename": @.asset->originalFilename,
      }
    }
  },
}`;

interface Props {
  data: ArtikkelI;
  slug: string;
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx?.params?.slug as string;
  const data: ArtikkelI = await sanityClient.fetch(artikkelQuery, { slug });

  return {
    props: {
      data,
      slug,
    },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: Props) => {
  const router = useRouter();
  const enablePreview = !!router.query.preview;

  const { data } = usePreviewSubscription(artikkelQuery, {
    params: { slug: props?.slug },
    initialData: props.data,
    enabled: enablePreview,
  });

  if (!router.isFallback && !data?.slug) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {enablePreview && <PreviewBanner />}
      <Artikkel data={data} />
    </>
  );
};

export default PreviewWrapper;
