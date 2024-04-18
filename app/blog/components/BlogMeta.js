import { getBlogSlug } from "@/app/api/blogSlug";

const BlogMeta = async () => {
  const data = await getBlogSlug();
  return <></>;
};

export default BlogMeta;
