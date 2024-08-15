import BloggForside from "src/components/blogg/BloggForside";
import { getAllBlogPosts } from "src/lib/services/sanity/model/blogg/bloggQuery";

const Blogg = async () => {
  const bloggposts = await getAllBlogPosts();

  return <BloggForside blogposts={bloggposts} />;
};

export default Blogg;
