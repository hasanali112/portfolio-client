import { singleProjectDetail } from "@/utils/getSingleProject";

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
    <div className="bg-[#000319] pt-36 pb-20">
      <div className="w-full max-w-[1220px] mx-auto h-screen">
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default DynamicProjectDetail;
