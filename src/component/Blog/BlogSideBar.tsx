import BlogRecent from "./BlogRecent";
import BlogSideCard from "./BlogSideCard";

const BlogSideBar = () => {
  return (
    <aside className=" mt-10 h-full">
      <div className="bg-[#1c222a] rounded-lg h-[70px] pt-5">
        <h1 className="text-center text-[#f3b90b] text-2xl font-bold">
          Popular
        </h1>
        <div>
          <BlogSideCard />
        </div>
      </div>
      <div className="bg-[#1c222a] rounded-lg h-[70px] mt-72 pt-5">
        <h1 className="text-center text-[#f3b90b] text-2xl font-bold">
          Latest
        </h1>
        <div>
          <BlogRecent />
        </div>
      </div>
    </aside>
  );
};

export default BlogSideBar;
