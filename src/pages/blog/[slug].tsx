const Bloggside = (props: { slug: string }) => {
  return (
    <div>
      <h1>Hello world! - {props.slug}</h1>
    </div>
  );
};

export interface StaticPathProps {
  paths: { params: { slug: string } }[];
  fallback: boolean;
}

export const getStaticPaths = async (): Promise<StaticPathProps> => {
  const articleSlugs = ["hello"];

  return {
    paths: articleSlugs.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

interface StaticProps {
  props: {
    slug: string;
  };
  revalidate: number;
}

export async function getStaticProps(props: { params: { slug: string } }): Promise<StaticProps> {
  return {
    props: {
      slug: props.params.slug,
    },
    revalidate: 60,
  };
}

export default Bloggside;
