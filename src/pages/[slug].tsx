import groq from "groq";
import { getClient } from "../lib/sanity";
import { ArtikkelI } from "../components/artikkel/types";
import Artikkel from "../components/artikkel/Artikkel";

export interface StaticPathProps {
  paths: { params: { slug: string } }[];
  fallback: boolean;
}

const allArtikkelPathsQuery = groq`*[_type == "artikkel"] {
  slug { current }
}`;

interface SanityPath {
  slug: {
    current: string;
  };
}

export const getStaticPaths = async (): Promise<StaticPathProps> => {
  const data: SanityPath[] = await getClient(false).fetch(allArtikkelPathsQuery);

  return {
    paths: data.map((path) => ({
      params: { slug: path.slug.current },
    })),
    fallback: true,
  };
};

interface StaticProps {
  props: {
    data: ArtikkelI;
  };
  revalidate: number;
}

export async function getStaticProps(props: { params: { slug: string } }): Promise<StaticProps> {
  const slug = props.params.slug;
  const artikkelQuery = groq`*[_type == "artikkel" && slug.current == "${slug}"][0]`;
  const data: ArtikkelI = await getClient(false).fetch(artikkelQuery);

  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
}

export default Artikkel;
