"use client";

import { motion } from "framer-motion";
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

const blogCardParent = {
  hidden: { opacity: 0, x: -1500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      type: "ease",
    },
  },
};

const AllBlogCard = ({ blogs, className }: TBlog) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={blogCardParent}
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
          <h1 className="text-xl font-semibold hover:text-[#f3b90b]">
            {blogs.title}
          </h1>
        </Link>
        <div className="flex gap-4 mt-2">
          <h1 className="inline-flex items-center  gap-2 text-sm">
            <span className="text-[#f3b90b]">
              <UserRound className="w-5" />
            </span>{" "}
            Hasan Ali
          </h1>
          <h1 className="inline-flex items-center gap-2 text-sm">
            <span className="text-[#f3b90b]">
              <CalendarDays className="w-5" />
            </span>{" "}
            9/11/23
          </h1>
        </div>
        <p className="mt-4 ">{blogs.description.slice(0, 150)}</p>
      </div>
      <div className="absolute top-4 left-4 bg-[#1c222a] border border-[#f3b90b] rounded-2xl p-1">
        <h1>{blogs.recent ? "Recent" : "Popular"}</h1>
      </div>
    </motion.div>
  );
};

export default AllBlogCard;
