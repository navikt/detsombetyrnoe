import { groq } from "next-sanity";

export const metaDataGroq = groq`
*[_id == "metadata"][0]{
  ...,
  privacyArticle->{
    tittel,
    "slug": slug.current
  }
}`;
