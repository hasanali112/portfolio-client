import { ArrowRight, Calendar, CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type TBlog = {
  className?: string;
  blogs: {
    _id: string;
    image: string;
    title: string;
    recent: boolean;
    popular: boolean;
    description: string;
  };
};

const BlogCard = ({ blogs, className }: TBlog) => {
  return (
    <div
      className={`bg-[#1c222a] w-[440px] h-[530px] rounded-lg p-2 relative ${className}`}
    >
      <div className="relative">
        <Image
          src={blogs.image}
          alt="blogImage"
          width={400}
          height={400}
          className=" w-full h-[270px] rounded-lg "
        />
        <div className="absolute top-0 w-full h-[270px] rounded-lg bg-black bg-opacity-45"></div>
      </div>
      <div className="mt-5 ml-3">
        <h1 className="text-xl font-semibold">{blogs.title}</h1>
        <div className="flex gap-4 mt-2">
          <h1 className="inline-flex items-center  gap-2 text-sm">
            <span className="text-[#f3b90b]">
              <UserRound className="w-5" />
            </span>{" "}
            Hasan Ali
          </h1>
          <h1 className="inline-flex items-center gap-2 text-sm">
            <span className="text-[#f3b90b]">
              <CalendarDays className="w-5" />
            </span>{" "}
            9/11/23
          </h1>
        </div>
        <p className="mt-4 ">{blogs.description.slice(0, 150)}</p>
      </div>
      <div className="absolute top-3 left-3 bg-[#1c222a] border border-[#f3b90b] rounded-2xl p-1">
        <h1>{blogs.recent ? "Recent" : "Popular"}</h1>
      </div>
    </div>
  );
};

export default BlogCard;
