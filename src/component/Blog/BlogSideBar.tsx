import BlogSideCard from "./BlogSideCard";

const BlogSideBar = () => {
  return (
    <aside className=" mt-10">
      <div className="bg-[#1c222a] rounded-lg h-[70px] pt-5">
        <h1 className="text-center text-[#f3b90b] text-2xl font-bold">
          Popular
        </h1>
        <div>
          <BlogSideCard />
        </div>
      </div>
    </aside>
  );
};

export default BlogSideBar;
