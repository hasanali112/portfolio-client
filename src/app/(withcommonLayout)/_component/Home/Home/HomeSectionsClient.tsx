"use client";

import dynamic from "next/dynamic";

const Experience = dynamic(() => import("../Experience/Experience"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../Testimonial/Testimonial"), {
  ssr: false,
});

export const TopSections = () => (
  <>
    <Experience />
  </>
);

export const MiddleSections = () => (
  <>
    <Testimonials />
  </>
);

export const BottomSections = () => null;
