import Image from "next/image";
import { ArrowUpRight, CalendarDays, Github, UserRound } from "lucide-react";
import { singleBlog } from "@/utils/getBlogSingle";
import BlogSideBar from "@/component/Blog/allBlog/BlogSideBar";

interface TDynamic {
  params: {
    blogId: string;
  };
}

const DynamicBlogDetail = async ({ params }: TDynamic) => {
  const singleBlogById = await singleBlog(params.blogId);
  const { _id, title, image, description } = singleBlogById.data;
  return (
    <div className="bg-[#111122] text-white pb-20">
      <div className="w-full max-w-[1400px] mx-auto px-[20px]">
        <div className="flex gap-4">
          <div className="bg-[#1c222a] w-[90%] mt-[40px] rounded-lg p-5">
            <div className="mb-10">
              <h1 className="text-4xl tracking-wide font-semibold mt-4">
                {title}
              </h1>
              <div className="flex gap-4 mt-2">
                <h1 className="inline-flex items-center  gap-2 text-sm">
                  <span className="text-[#f3b90b]">
                    <UserRound className="w-5" />
                  </span>{" "}
                  by Hasan Ali posted on
                </h1>
                <h1 className="inline-flex items-center gap-2 text-sm">
                  <span className="text-[#f3b90b]">
                    <CalendarDays className="w-5" />
                  </span>{" "}
                  9/11/23
                </h1>
              </div>
            </div>
            <div>
              <Image
                src={image}
                alt="projectImage"
                height={400}
                width={400}
                className="w-full h-[400px] rounded-lg"
              />
            </div>

            <div>
              <p className="mt-6 tracking-wider text-[#e4eae3]">
                {description}
              </p>
            </div>
          </div>
          <div>
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogDetail;
