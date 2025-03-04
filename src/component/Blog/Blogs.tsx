import { getBlogData } from "@/utils/getBlog";
import BlogCard from "./BlogCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import BlogTitleAnimation from "./BlogTitleAnimation";

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
      className="bg-[#111122] pt-10 text-white lg:pt-28 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1400px] px-[20px] mx-auto">
        <BlogTitleAnimation />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 xl:gap-4 mt-10 overflow-hidden px-[10px]">
          {blogData?.data?.map((blog: TAllBlog, index: number) => (
            <BlogCard
              key={blog._id}
              blogs={{
                ...blog,
                position:
                  index === 1 ? "middle" : index % 3 === 0 ? "left" : "right",
              }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <Link href="/blogs">
            <Button className="bg-[#2871a1] rounded-full text-white">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
