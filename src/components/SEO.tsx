import * as React from "react";
import Head from "next/head";
import { MetadataI } from "../pages";
import { urlFor } from "../lib/sanity";

function SEO(props: { metadata?: MetadataI; url?: string }) {
  return (
    <Head>
      <meta property="og:title" content={props?.metadata?.title} />
      <meta property="og:description" content={props.metadata?.description} />
      <meta property="og:image" content={urlFor(props.metadata?.previewImage).width(600).height(300).url() || ""} />
      {props.url && <meta property="og:url" content={props.url} />}
      <title>{props.metadata?.title}</title>
    </Head>
  );
}

export default SEO;
