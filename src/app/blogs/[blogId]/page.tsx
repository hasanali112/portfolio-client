import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { singleBlog } from "@/utils/getBlogSingle";

interface TDynamic {
  params: {
    blogId: string;
  };
}

const DynamicBlogDetail = async ({ params }: TDynamic) => {
  const singleBlogById = await singleBlog(params.blogId);
  const { _id, title, image, description } = singleBlogById.data;
  return (
    <div className="bg-[#000319]   pt-36 pb-20">
      <div className="w-full max-w-[1220px] mx-auto ">
        <div>
          <h1 className="text-4xl font-bold  ml-[10%] pt-4 pb-16">{title}</h1>
          <div className="bg-[#0b1e27] border border-zinc-400 p-7 lg:w-[90%] w-[90%] mx-auto">
            <Image
              src={image}
              alt="projectImage"
              height={400}
              width={400}
              className="w-full h-[500px]"
            />
          </div>
          <h1 className="lg:text-5xl text-3xl mt-10 lg:ml-[13%] ml-[7%] font-bold group inline-flex items-center justify-center gap-7">
            {title}
          </h1>
          <div className="lg:ml-[13%] ml-[7%] mt-16 lg:w-[80%] w-[90%]">
            <p className="mt-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlogDetail;
