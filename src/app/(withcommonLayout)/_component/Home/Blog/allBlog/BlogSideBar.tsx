import BlogRecent from "./BlogRecent";
import BlogSideCard from "./BlogSideCard";

const BlogSideBar = () => {
  return (
    <aside className="mt-10 h-full space-y-8">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-5 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg py-3 px-4 mb-4">
          <h1 className="text-center text-white text-2xl font-bold">
            Popular
          </h1>
        </div>
        <BlogSideCard />
      </div>
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-5 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg py-3 px-4 mb-4">
          <h1 className="text-center text-white text-2xl font-bold">
            Latest
          </h1>
        </div>
        <BlogRecent />
      </div>
    </aside>
  );
};

export default BlogSideBar;
