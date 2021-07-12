import * as React from "react";
import { GetStaticProps } from "next";
import { sanityClient, usePreviewSubscription } from "../../lib/sanity";
import groq from "groq";
import { isDevelopment } from "../../utils/environment";

const query = groq`
*[_type == "forfatter" && defined(slug)] {
  ...
}
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const forfattere = await sanityClient.fetch(query);
  return {
    props: { data: forfattere },
    revalidate: 600,
  };
};

const PreviewWrapper = (props: { data: any }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: props.data,
    enabled: isDevelopment(),
  });

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default PreviewWrapper;
