import * as React from "react";
import { GetStaticProps } from "next";
import { sanityClient, usePreviewSubscription } from "../../lib/sanity";
import groq from "groq";
import BloggForside from "../../components/blogg/BloggForside";
import { isDevelopment } from "../../utils/environment";

export const groqBlogpostPreviewFields = `
tittel,
slug,
_createdAt,
mainImage,
_id,
language,
forfattere[]-> {
  navn,
  mainImage,
  _id
}
`;

const query = groq`
*[_type == "blogpost"] | order(_createdAt desc) {
  ${groqBlogpostPreviewFields}
}
`;

export type ForfatterI = {
  navn: string;
  mainImage: any;
  slug: string;
  _id: string;
};

export type BlogpostPreviewI = {
  tittel?: string;
  slug?: { current?: string };
  _createdAt: string;
  mainImage?: { altTekst?: string };
  _id: string;
  language?: string;
  forfattere?: ForfatterI[];
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blogposts = await sanityClient.fetch(query);
  return {
    props: { data: blogposts },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: { data: BlogpostPreviewI[] }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: props.data,
    enabled: isDevelopment(),
  });

  return <BloggForside blogposts={data} />;
};

export default PreviewWrapper;
