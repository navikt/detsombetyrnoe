import { groq } from "next-sanity";
import { sanityFetch } from "src/lib/services/sanity/fetch";

export const metaDataGroq = groq`
*[_id == "metadata"][0]{
  description,
  previewImage,
  title,
  privacyArticle->{
    tittel,
    "slug": slug.current
  }
}`;

export interface Metadata {
  description: string;
  previewImage: any;
  title: string;
  privacyArticle: {
    tittel: string;
    slug: string;
  };
}

export const getMetaData = async () => {
  return sanityFetch<Metadata>({ query: metaDataGroq });
};
