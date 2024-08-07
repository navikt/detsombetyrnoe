import { GetStaticPaths, GetStaticProps } from "next";
import { sanityClient } from "../../lib/sanity";
import groq from "groq";
import Bloggside from "../../components/blogg/BloggPost";
import { ForfatterI } from "./index";
import { SanityImageI } from "../../components/ArtikkelBilde";
import { useRouter } from "next/router";
import Error from "next/error";
import PreviewBanner from "../../components/PreviewBanner";
import { isDevelopment } from "../../utils/environment";

const pathQuery = groq`*[_type == "blogpost"][].slug.current`;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articleSlugs = await sanityClient.fetch(pathQuery);

  return {
    paths: articleSlugs.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export interface BlogpostData {
  tittel: string;
  _createdAt: string;
  mainImage?: SanityImageI;
  body: any;
  forfattere?: ForfatterI[];
  slug: string;
  language: string;
}

const blogQuery = groq`
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;
  const data = await sanityClient.fetch(blogQuery, { slug });
  return {
    props: { data, slug },
    revalidate: 60,
  };
};

const PreviewWrapper = (props: { data: BlogpostData; slug?: string }) => {
  const router = useRouter();
  const enablePreview = isDevelopment() || !!router.query.preview;

  if (!router.isFallback && !props.data?.slug) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {enablePreview && <PreviewBanner />}
      <Bloggside {...props.data} />
    </>
  );
};

export default PreviewWrapper;
