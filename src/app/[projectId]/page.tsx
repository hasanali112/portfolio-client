import { singleProjectDetail } from "@/utils/getSingleProject";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TDynamic {
  params: {
    projectId: string;
  };
}
const DynamicProjectDetail = async ({ params }: TDynamic) => {
  const getSingleProjectDeatil = await singleProjectDetail(params.projectId);

  const {
    _id,
    image,
    title,
    description,
    liveLink,
    gitRepoLink,
    useTechnology,
  } = getSingleProjectDeatil.data;
  return (
    <div className="bg-[#111122]  text-white pb-20">
      <div className="w-full max-w-[1400px] mx-auto px-[20px]">
        <div>
          <h1 className="text-4xl font-bold  pt-4 mb-8">
            Project Detail of {title}
          </h1>
          <div className="bg-[#1c222a]">
            <Image
              src={image}
              alt="projectImage"
              height={400}
              width={400}
              className="w-full"
            />
          </div>
          <h1 className="lg:text-5xl text-3xl mt-10  font-bold group inline-flex items-center justify-center gap-7">
            {title}
            <Link href={gitRepoLink} target="_blank">
              <span className="border border-zinc-500 rounded-full flex items-center justify-center w-[40px] h-[40px] group-hover:bg-purple-500  duration-[3s] ease-in-out">
                <Github className="w-5 fill-zinc-400 text-zinc-400 group-hover:text-white group-hover:fill-white" />
              </span>
            </Link>
          </h1>
          <div className="bg-gradient-to-r from-[#804ceb]  mt-7 flex items-center justify-center text-white rounded-full to-[#2e175c] w-[230px] h-[50px]">
            <Link href={liveLink} target="_blank">
              <h1 className="inline-flex items-center gap-3 ">
                <span className="text-2xl">Live preview </span>
                <ArrowUpRight className="text-3xl" />
              </h1>
            </Link>
          </div>
          <div className=" mt-16 lg:w-[80%] w-[90%]">
            <h1 className="text-3xl font-semibold">Project Description :</h1>
            <p className="mt-6">{description}</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Use Technologies :</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {useTechnology?.map((item: string, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#804ceb]  mt-7 flex items-center justify-center  rounded-full to-[#2e175c] w-[230px] h-[50px]"
                >
                  <h1 className="inline-flex items-center gap-3 ">{item}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProjectDetail;
