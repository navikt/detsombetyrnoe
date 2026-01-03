import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import Artikkel from "src/components/artikkel/Artikkel";
import { ArtikkelI } from "src/components/artikkel/types";
import metrics from "src/lib/metrics";
import { sanityFetch } from "src/lib/services/sanity/fetch";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const artikkelQuery = groq`
*[_type == "artikkel" && slug.current == $slug][0]{
  ...,
  innhold[]{
    ...,
    markDefs[]{
      ...,
      _type == 'filopplasting' => {
        "url": @.asset->url,
        "filename": @.asset->originalFilename,
      }
    }
  },
}`;

const Page = async ({ params }: Props) => {
  const data = await sanityFetch<ArtikkelI>({ query: artikkelQuery, params: { slug: (await params).slug } });

  if (!data) {
    return notFound();
  }

  metrics.pageVisitsCounter.inc({ path: "/[slug]" });

  return <Artikkel data={data} />;
};

export default Page;
