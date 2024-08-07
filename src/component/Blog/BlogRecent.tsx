import { getBlogData } from "@/utils/getBlog";
import BlogAsideCard, { TBlogs } from "./BlogAsideCard";

const BlogRecent = async () => {
  let blogData;
  try {
    blogData = await getBlogData();
  } catch (error) {
    console.log(error);
  }

  const recentBlog = blogData?.data?.filter((blog: TBlogs) => blog.recent);
  return (
    <div className="flex flex-col gap-4 mt-7">
      {recentBlog?.slice(0, 4).map((blog: TBlogs) => (
        <BlogAsideCard key={blog._id} blogs={blog} />
      ))}
    </div>
  );
};

export default BlogRecent;
