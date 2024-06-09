import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type TBlog = {
  _id: string;
  image: string;
  title: string;
  recent: boolean;
  popular: boolean;
  description: string;
};

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="relative">
      <Image
        src={blog.image}
        alt="blogImage"
        width={400}
        height={400}
        className="lg:w-[370px] w-full h-[370px] rounded-2xl "
      />
      <div className="bg-[#6839c0] lg:w-[320px] h-[83px] rounded-2xl pt-4 lg:translate-x-7 -translate-y-[100px]">
        <div className="flex justify-around">
          <h1>5/9/2023</h1>
          <h1>comment (0)</h1>
        </div>
        <h1 className="lg:text-2xl text-xl font-bold ml-8 inline-flex items-center gap-4">
          {blog.title.slice(0, 15)} ..{" "}
          <Link href={`blogs/${blog._id}`}>
            <span>
              <ArrowRight className="w-10" />
            </span>
          </Link>
        </h1>
      </div>
      <div className="absolute top-3 left-3 bg-[#915cf4] rounded-2xl p-1">
        <h1>{blog.recent ? "Recent" : "Popular"}</h1>
      </div>
    </div>
  );
};

export default BlogCard;
