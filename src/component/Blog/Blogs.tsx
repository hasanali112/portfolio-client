import { getBlogData } from "@/utils/getBlog";
import BlogCard from "./BlogCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type TAllBlog = {
  _id: string;
  image: string;
  title: string;
  recent: boolean;
  popular: boolean;
  description: string;
};

const Blogs = async () => {
  let blogData;
  try {
    blogData = await getBlogData();
  } catch (error) {
    console.log(error);
  }

  return (
    <div
      id="blog"
      className="bg-[#111122] pt-20 text-white lg:pt-28 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1400px] px-[20px] mx-auto">
        <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
          Recent Blogs
        </h1>
        <p className="lg:w-[50%] w-[90%] mx-auto text-center mt-7 text-[#f3b90b]">
          I put your ideas and thus your wishes in the form of a unique web
          project that inspire you and your customers
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-10 lg:px-0 lg:gap-2 mt-10">
          {blogData?.data?.map((blog: TAllBlog) => (
            <BlogCard key={blog._id} blogs={blog} />
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <Link href="/blogs">
            <Button className="bg-[#f3b90b] rounded-full text-white">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
