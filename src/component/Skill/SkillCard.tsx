import { Card, CardHeader, CardBody, Image, Progress } from "@nextui-org/react";

export type TSkills = {
  _id: string;
  image: string;
  title: string;
  skillProficiency: number;
};

const SkillCard = ({ item }: { item: TSkills }) => {
  return (
    <Card className=" w-[150px] h-[154px] bg-gradient-to-r from-[#2a1650] to-[#6237b7] text-white flex flex-col justify-center hover:-translate-y-2 duration-700 cursor-pointer">
      <CardBody className="overflow-visible">
        <div className="flex justify-center items-center">
          <Image
            alt="Card background"
            className="w-[99%] h-[65px] mx-auto mt-5"
            src={item.image}
            width={0}
          />
        </div>
      </CardBody>
      <div className="p-3">
        <p className="text-tiny uppercase font-bold">{item.title}</p>
        <small>{item.skillProficiency}%</small>
        <Progress
          aria-label="Loading..."
          color="danger"
          value={item.skillProficiency}
          className="max-w-md mb-5"
        />
      </div>
    </Card>
  );
};

export default SkillCard;
