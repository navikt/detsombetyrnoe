import * as React from "react";
import { GetStaticProps } from "next";
import { getClient, usePreviewSubscription } from "../../lib/sanity";
import groq from "groq";
import { isDevelopment } from "../../utils/environment";

const query = groq`
*[_type == "forfatter" && defined(slug)] {
  ...
}
`;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const preview = !!ctx.preview || isDevelopment();
  const forfattere = await getClient(preview).fetch(query);
  return {
    props: { data: forfattere, preview },
    revalidate: 600,
  };
};

const PreviewWrapper = (props: { data: any; preview?: boolean }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: props.data,
    enabled: !!props.preview,
  });

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default PreviewWrapper;
