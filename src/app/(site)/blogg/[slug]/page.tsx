import { notFound } from "next/navigation";
import Bloggside from "src/components/blogg/BloggPost";
import { getBlogPostBySlug } from "src/lib/services/sanity/model/blogg/bloggQuery";

interface Props {
  params: {
    slug: string;
  };
}

const BloggPostPage = async ({ params }: Props) => {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return <Bloggside {...post} />;
};

export default BloggPostPage;
