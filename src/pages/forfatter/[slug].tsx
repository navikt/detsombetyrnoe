import { GetStaticPaths, GetStaticProps } from "next";
import { sanityClient, usePreviewSubscription } from "../../lib/sanity";
import groq from "groq";
import { useRouter } from "next/router";
import Error from "next/error";
import { isDevelopment } from "../../utils/environment";
import { BlogpostPreviewI, groqBlogpostPreviewFields } from "../blogg";
import React from "react";
import Forfatter from "../../components/Forfatter";

const pathQuery = groq`*[_type == "forfatter" && defined(slug)][].slug.current`;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const forfatterSlugs = await sanityClient.fetch(pathQuery);
  return {
    paths: forfatterSlugs.filter(Boolean).map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

const forfatterQuery = groq`
*[_type == "forfatter" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  "blogposts": *[_type == "blogpost" && ^._id in forfattere[]._ref] {
    ${groqBlogpostPreviewFields}
  }
}
`;

export interface ForfatterI {
  bio: string;
  blogposts?: BlogpostPreviewI[];
  mainImage: any;
  navn: string;
  slug: string;
  _id: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await sanityClient.fetch(forfatterQuery, { slug: ctx.params?.slug });
  return {
    props: { data },
    revalidate: 600,
  };
};

const PreviewWrapper = (props: { data: ForfatterI }) => {
  const router = useRouter();
  if (!router.isFallback && !props.data?.slug) {
    return <Error statusCode={404} />;
  }

  const enablePreview = isDevelopment() || !!router.query.preview;

  const { data } = usePreviewSubscription(forfatterQuery, {
    params: { slug: props.data?.slug },
    initialData: props.data,
    enabled: enablePreview,
  });

  return <Forfatter {...data} />;
};

export default PreviewWrapper;
