"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/component/ui/Card";
import imageHero from "@/assets/heroimg.png";

const HeroCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[450px]  h-[420px] rounded-xl  border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageHero}
            height="1400"
            width="1400"
            className="h-[420px] w-[420px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20"></div>
      </CardBody>
    </CardContainer>
  );
};

export default HeroCard;
