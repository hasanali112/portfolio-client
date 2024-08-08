"use client";

import BlogRecent from "./BlogRecent";
import BlogSideCard from "./BlogSideCard";
import { motion } from "framer-motion";

const sideBarParent = {
  hidden: { opacity: 0, x: 1500 },
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

const BlogSideBar = () => {
  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={sideBarParent}
      className=" mt-10 h-full"
    >
      <div className="bg-[#1c222a] rounded-lg h-[70px] pt-5">
        <h1 className="text-center text-[#f3b90b] text-2xl font-bold">
          Popular
        </h1>
        <div>
          <BlogSideCard />
        </div>
      </div>
      <div className="bg-[#1c222a] rounded-lg h-[70px] mt-72 pt-5">
        <h1 className="text-center text-[#f3b90b] text-2xl font-bold">
          Latest
        </h1>
        <div>
          <BlogRecent />
        </div>
      </div>
    </motion.aside>
  );
};

export default BlogSideBar;
