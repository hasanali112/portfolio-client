import { getBlogData } from "@/utils/getBlog";
import BlogCard, { TBlog } from "./BlogCard";

const Blogs = async () => {
  const blogData = await getBlogData();
  const { data } = blogData;
  return (
    <div
      id="blog"
      className="bg-[#050709] pt-20 text-white lg:pt-28 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-center font-bold text-purple-500 mb-2 tracking-wider">
          Recent <span className="text-[#d9c7fc]">Blogs</span>
        </h1>
        <p className="lg:w-[50%] w-[90%] mx-auto text-center mt-7">
          I put your ideas and thus your wishes in the form of a unique web
          project that inspire you and your customers
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-10 lg:px-0 lg:gap-2 mt-10">
          {data?.map((blog: TBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
