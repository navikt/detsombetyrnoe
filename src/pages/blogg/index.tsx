import * as React from "react";
import { GetStaticProps } from "next";
import { getClient } from "../../lib/sanity";
import groq from "groq";
import BloggForside from "../../components/blogg/BloggForside";

const query = groq`
*[_type == "blogpost"] | order(_createdAt desc) {
  tittel,
  slug,
  _createdAt,
  mainImage,
  _id,
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
  tittel: string;
  slug: { current: string };
  _createdAt: string;
  mainImage: { altTekst: string };
  _id: string;
  forfattere: ForfatterI[];
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blogposts = await getClient(false).fetch(query);
  return {
    props: { blogposts },
  };
};

export default BloggForside;
