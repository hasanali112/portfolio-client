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
      <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
        Recent Blogs
      </h1>
      <p className="lg:w-[50%] w-[90%] mx-auto text-center mt-7 text-[#f3b90b]">
        I put your ideas and thus your wishes in the form of a unique web
        project that inspire you and your customers
      </p>
    </motion.div>
  );
};

export default BlogTitleAnimation;
