"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type TBlog = {
  className?: string;
  blogs: {
    _id: string;
    image: string;
    title: string;
    recent: boolean;
    popular: boolean;
    description: string;
    position: "left" | "middle" | "right";
  };
};

const BlogCard = ({ blogs, className }: TBlog) => {
  const blogCardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: blogCardRef,
    offset: ["0 1", "0.5 1"],
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [1500, 1]);
  const xValueLeft = useTransform(scrollYProgress, [0, 1], [-1500, 1]);
  const xValueRight = useTransform(scrollYProgress, [0, 1], [1500, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={blogCardRef}
      style={
        blogs.position === "middle"
          ? { y: yValue, opacity: opacityValue, transition: "0.8s ease" }
          : {
              x: blogs.position === "left" ? xValueLeft : xValueRight,
              opacity: opacityValue,
              transition: "0.8s ease",
            }
      }
      className={`bg-[#1c222a] lg:w-[99%] xl:w-[98%] h-[545px] rounded-lg p-2 relative ${className}`}
    >
      <Link href={`/blogs/${blogs._id}`}>
        <div className="relative">
          <Image
            src={blogs.image}
            alt="blogImage"
            width={400}
            height={400}
            className=" w-full h-[270px] rounded-lg "
          />
          <div className="absolute top-0 w-full h-[270px] rounded-lg bg-black bg-opacity-45"></div>
        </div>
      </Link>

      <div className="mt-5 ml-3">
        <Link href={`/blogs/${blogs._id}`}>
          <h1 className="text-xl font-semibold hover:text-[#89c9f4]">
            {blogs.title}
          </h1>
        </Link>
        <div className="flex gap-4 mt-2">
          <h1 className="inline-flex items-center  gap-2 text-sm">
            <span className="text-[#89c9f4]">
              <UserRound className="w-5" />
            </span>{" "}
            Hasan Ali
          </h1>
          <h1 className="inline-flex items-center gap-2 text-sm">
            <span className="text-[#89c9f4]">
              <CalendarDays className="w-5" />
            </span>{" "}
            9/11/23
          </h1>
        </div>
        <p className="mt-4 ">{blogs.description.slice(0, 150)}</p>
      </div>
      <div className="absolute top-4 left-4 bg-[#1c222a] border border-[#89c9f4] rounded-2xl p-1">
        <h1>{blogs.recent ? "Recent" : "Popular"}</h1>
      </div>
    </motion.div>
  );
};

export default BlogCard;
