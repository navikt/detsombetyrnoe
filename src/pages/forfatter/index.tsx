import * as React from "react";
import { GetStaticProps } from "next";
import { sanityClient } from "../../lib/sanity";
import groq from "groq";

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
  return <pre>{JSON.stringify(props.data, undefined, 2)}</pre>;
};

export default PreviewWrapper;
