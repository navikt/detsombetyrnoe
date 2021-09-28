import { groq } from "next-sanity";

export const metaDataGroq = groq`
"metaData": *[_id == "metadata"][0]{
  ...,
  privacyArticle->{
    tittel,
    "slug": slug.current
  }
}`;
