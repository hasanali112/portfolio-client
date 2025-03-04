"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const BlogTitleAnimation = () => {
  const blogRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: blogRef,
    offset: ["0 1", "1.3 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={blogRef}
      style={{ scale: scaleValue, transition: "0.8s ease" }}
    >
      <h1 className=" text-4xl md:text-5xl lg:text-5xl text-center font-bold text-white mb-2 tracking-wider">
        Recent Blogs
      </h1>
      <p className="lg:w-[50%] w-[95%] mx-auto text-center mt-7 text-[#89c9f4]">
        I put your ideas and thus your wishes in the form of a unique web
        project that inspire you and your customers
      </p>
    </motion.div>
  );
};

export default BlogTitleAnimation;
