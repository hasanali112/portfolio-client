import { getBlogData } from "@/utils/getBlog";
import BlogCard from "./BlogCard";

type TBlogs = {
  _id: string;
  image: string;
  title: string;
  recent: boolean;
  popular: boolean;
  description: string;
};

const AllBlog = async () => {
  let blogData;
  try {
    blogData = await getBlogData();
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-7 mt-10">
        {blogData?.data?.map((blog: TBlogs) => (
          <BlogCard key={blog._id} blogs={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
