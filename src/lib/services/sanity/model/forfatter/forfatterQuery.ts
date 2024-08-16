import { groq } from "next-sanity";
import { client } from "src/lib/services/sanity/client";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { BlogpostPreview, blogpostPreviewGroq } from "src/lib/services/sanity/model/blogg/bloggQuery";

export interface Forfatter {
  bio: string;
  blogposts?: BlogpostPreview[];
  mainImage: any;
  navn: string;
  slug: string;
  _id: string;
}

const forfatterGroq = groq`
*[_type == "forfatter" && defined(slug)] {
  ...
}
`;

export const getAllForfattere = async (): Promise<Forfatter[]> => {
  return sanityFetch({ query: forfatterGroq });
};

const forfatterQuery = groq`
*[_type == "forfatter" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  "blogposts": *[_type == "blogpost" && ^._id in forfattere[]._ref] {
    ${blogpostPreviewGroq}
  }
}
`;

export const getForfatterBySlug = async (slug: string): Promise<Forfatter> => {
  return await sanityFetch({ query: forfatterQuery, params: { slug } });
};
