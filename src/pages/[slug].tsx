import groq from "groq";
import { getClient, usePreviewSubscription } from "../lib/sanity";
import { ArtikkelI } from "../components/artikkel/types";
import Artikkel from "../components/artikkel/Artikkel";
import { useRouter } from "next/router";
import Error from "next/error";
import PreviewBanner from "../components/PreviewBanner";
import { GetStaticProps } from "next";
import { isDevelopment } from "../utils/environment";

export interface StaticPathProps {
  paths: { params: { slug: string } }[];
  fallback: boolean;
}

const allArtikkelPathsQuery = groq`*[_type == "artikkel"][].slug.current`;

export const getStaticPaths = async (): Promise<StaticPathProps> => {
  const data: string[] = await getClient(false).fetch(allArtikkelPathsQuery);

  return {
    paths: data.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

interface StaticProps {
  data: ArtikkelI;
}

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

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const preview = !!ctx.preview || isDevelopment();
  const slug = ctx?.params?.slug;
  const data: ArtikkelI = await getClient(preview).fetch(artikkelQuery, { slug });

  return {
    props: {
      data,
      slug,
      preview,
    },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: { data: ArtikkelI; preview?: boolean; slug?: string }) => {
  const router = useRouter();
  const enablePreview = !!props.preview || !!router.query.preview;

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
