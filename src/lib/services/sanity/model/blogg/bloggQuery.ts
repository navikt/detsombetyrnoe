import { groq } from "next-sanity";
import { SanityImageI } from "src/components/ArtikkelBilde";
import { client } from "src/lib/services/sanity/client";
import { sanityFetch } from "src/lib/services/sanity/fetch";
import { Forfatter } from "src/lib/services/sanity/model/forfatter/forfatterQuery";

export type BlogpostPreview = {
  tittel?: string;
  slug?: { current?: string };
  _createdAt: string;
  mainImage?: { altTekst?: string };
  _id: string;
  language?: string;
  forfattere?: Forfatter[];
};

export const blogpostPreviewGroq = groq`
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

const allBlogPostsGroq = groq`
*[_type == "blogpost"] | order(_createdAt desc) {
  ${blogpostPreviewGroq}
}
`;

export const getAllBlogPosts = async (): Promise<BlogpostPreview[]> => {
  return sanityFetch({ query: allBlogPostsGroq });
};

export interface BlogpostData {
  tittel: string;
  _createdAt: string;
  mainImage?: SanityImageI;
  body: any;
  forfattere?: Forfatter[];
  slug: string;
  language: string;
}

const singleBlogPostGroq = groq`
    *[_type == "blogpost" && slug.current == $slug][0] {
      tittel,
      _createdAt,
      mainImage,
      body[]{
        ...,
        markDefs[]{
          ...,
          _type == 'filopplasting' => {
              "url": @.asset->url,
            "filename": @.asset->originalFilename,
            }
        }
      },
      "slug": slug.current,
      language,
      forfattere[]-> {
        navn,
        mainImage,
        "slug": slug.current
      }
    }
  `;

export const getBlogPostBySlug = async (slug: string): Promise<BlogpostData> => {
  return sanityFetch({ query: singleBlogPostGroq, params: { slug } });
};
