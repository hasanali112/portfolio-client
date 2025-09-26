import { getAllBlogs } from "@/services/blogService";
import BlogAsideCard, { TBlogs } from "./BlogAsideCard";

const BlogSideCard = async () => {
  let blogData;
  try {
    blogData = await getAllBlogs();
    // Filter for popular blogs
    if (blogData?.data) {
      blogData.data = blogData.data.filter((blog: TBlogs) => blog.popular);
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col gap-4 mt-7">
      {blogData?.data?.slice(0, 4).map((blog: TBlogs) => (
        <BlogAsideCard key={blog._id} blogs={blog} />
      ))}
    </div>
  );
};

export default BlogSideCard;
