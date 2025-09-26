import { CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";

export type TBlogs = {
  _id: string;
  blogImage: string;
  title: string;
  recent: boolean;
  popular: boolean;
  description: string;
  createdAt: string;
};

const BlogAsideCard = ({ blogs }: { blogs: TBlogs }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: '2-digit' 
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-2 grid grid-cols-12 gap-3 backdrop-blur-sm hover:border-gray-500/50 transition-all">
      <div className="col-span-3 lg:col-span-3 md:col-span-12">
        <Image
          src={blogs.blogImage}
          alt="card image"
          width={100}
          height={100}
          className="w-full lg:w-[100px] h-[100px] rounded-lg object-cover"
        />
      </div>
      <div className="col-span-9 lg:col-span-9 md:col-span-12">
        <h1 className="text-gray-300 font-medium">{blogs.title}</h1>
        <div className="flex gap-4 mt-2">
          <h1 className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span className="text-gray-400">
              <UserRound className="w-4" />
            </span>
            Hasan Ali
          </h1>
          <h1 className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span className="text-gray-400">
              <CalendarDays className="w-4" />
            </span>
            {formatDate(blogs.createdAt)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogAsideCard;
