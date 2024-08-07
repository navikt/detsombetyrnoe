import { GetStaticPaths, GetStaticProps } from "next";
import { sanityClient } from "../../lib/sanity";
import groq from "groq";
import { useRouter } from "next/router";
import Error from "next/error";
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

  return <Forfatter {...props.data} />;
};

export default PreviewWrapper;
