import * as React from "react";
import { GetStaticProps } from "next";
import { getClient, usePreviewSubscription } from "../../lib/sanity";
import groq from "groq";
import BloggForside from "../../components/blogg/BloggForside";
import { isDevelopment } from "../../utils/environment";

const query = groq`
*[_type == "blogpost" && published == true] | order(_createdAt desc) {
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
}
`;

export type ForfatterI = {
  navn: string;
  mainImage: any;
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
  const preview = !!ctx.preview || isDevelopment();
  const blogposts = await getClient(preview).fetch(query);
  return {
    props: { data: blogposts, preview },
    revalidate: 600,
  };
};

const PreviewWrapper = (props: { data: BlogpostPreviewI[]; preview?: boolean }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: props.data,
    enabled: !!props.preview,
  });

  return <BloggForside blogposts={data} />;
};

export default PreviewWrapper;
