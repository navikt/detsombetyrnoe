import { GetStaticPaths, GetStaticProps } from "next";
import { getClient, usePreviewSubscription } from "../../lib/sanity";
import groq from "groq";
import Bloggside from "../../components/blogg/BloggPost";
import { ForfatterI } from "./index";
import { SanityImageI } from "../../components/ArtikkelBilde";
import { useRouter } from "next/router";
import Error from "next/error";
import PreviewBanner from "../../components/PreviewBanner";
import { isDevelopment } from "../../utils/environment";

const pathQuery = groq`*[_type == "blogpost"][].slug.current`;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articleSlugs = await getClient(false).fetch(pathQuery);

  return {
    paths: articleSlugs.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export interface BlogpostData {
  tittel: string;
  _createdAt: string;
  mainImage?: SanityImageI;
  body: any;
  forfattere?: ForfatterI[];
  slug: string;
  language: string;
}

const blogQuery = groq`
  *[_type == "blogpost" && slug.current == $slug][0] {
    tittel,
    _createdAt,
    mainImage,
    body,
    "slug": slug.current,
    language,
    forfattere[]-> {
      navn,
      mainImage,
      "slug": slug.current
    }
  }
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const preview = !!ctx.preview || isDevelopment();
  const data = await getClient(preview).fetch(blogQuery, { slug: ctx.params?.slug });
  return {
    props: { data, preview },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: { data: BlogpostData; preview?: boolean }) => {
  const router = useRouter();
  const enablePreview = !!props.preview || !!router.query.preview;

  const { data } = usePreviewSubscription(blogQuery, {
    params: { slug: props.data?.slug },
    initialData: props.data,
    enabled: enablePreview,
  });

  if (!router.isFallback && !data?.slug) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {enablePreview && <PreviewBanner />}
      <Bloggside {...data} />
    </>
  );
};

export default PreviewWrapper;
