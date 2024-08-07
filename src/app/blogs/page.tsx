import AllBlog from "@/component/Blog/AllBlog";
import BlogSideBar from "@/component/Blog/BlogSideBar";

const Blog = () => {
  return (
    <div className=" bg-[#111122] text-white pb-20">
      <div className="w-full max-w-[1400px] px-[20px] mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <AllBlog />
          </div>
          <div className="col-span-4">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
