import { CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";

export type TBlogs = {
  _id: string;
  image: string;
  title: string;
  recent: boolean;
  popular: boolean;
  description: string;
};

const BlogAsideCard = ({ blogs }: { blogs: TBlogs }) => {
  return (
    <div className="bg-[#1c222a] rounded-lg p-2 grid grid-cols-12 gap-3">
      <div className="col-span-3 lg:col-span-3 md:col-span-12">
        <Image
          src={blogs.image}
          alt="card image"
          width={100}
          height={100}
          className="w-full lg:w-[100px] h-[100px] rounded-lg"
        />
      </div>
      <div className="col-span-9 lg:col-span-9 md:col-span-12">
        <h1>{blogs.title}</h1>
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
      </div>
    </div>
  );
};

export default BlogAsideCard;
