import { GetStaticPaths } from "next";
import { getClient } from "../../lib/sanity";
import groq from "groq";
import Bloggside from "../../components/blogg/BloggPost";
import { ForfatterI } from "./index";

export interface StaticPathProps {
  paths: { params: { slug: string } }[];
  fallback: boolean;
}

const pathQuery = groq`
*[_type == "blogpost"] {
  slug
}
`;

export const getStaticPaths: GetStaticPaths = async (context): Promise<StaticPathProps> => {
  const articleSlugs = await getClient(false).fetch(pathQuery);

  return {
    paths: articleSlugs.map((post: any) => ({
      params: { slug: post.slug.current },
    })),
    fallback: false,
  };
};

export type SanityImageI = { altTekst: string; caption?: string };

export interface BlogpostData {
  tittel: string;
  _createdAt: string;
  mainImage: SanityImageI;
  body: any;
  forfattere: ForfatterI[];
}

interface StaticProps {
  props: {
    data: BlogpostData;
  };
  revalidate: number;
}

export async function getStaticProps(props: { params: { slug: string } }): Promise<StaticProps> {
  const blogQuery = groq`
    *[_type == "blogpost" && slug.current == "${props.params.slug}"][0] {
      tittel,
      _createdAt,
      mainImage,
      body,
      forfattere[]-> {
        navn,
        mainImage,
        ...
      }
    }
  `;
  const data = await getClient(false).fetch(blogQuery);
  return {
    props: data,
    revalidate: 600,
  };
}

export default Bloggside;
