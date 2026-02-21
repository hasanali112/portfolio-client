import { Metadata } from "next";
import { Suspense } from "react";
import BlogsContent from "./BlogsContent";
import BlogLoadingSkeleton from "./BlogLoadingSkeleton";

export const metadata: Metadata = {
  title: "Blog & Insights | Web Dev Tips for Service Businesses",
  description:
    "Read the latest web development insights, SEO strategies, and tutorials from Hasan Ali. Practical tips for service businesses — plumbers, roofers, dentists, and contractors — on getting more leads online.",
  keywords: [
    // Blog discovery
    "web development blog",
    "freelance web developer blog",
    "web development tips",
    "web development tutorials",

    // Topic keywords (long-tail blog targets)
    "how to get more leads from your website",
    "website SEO tips for local businesses",
    "Next.js tutorials",
    "React development tips",
    "how much does a website cost for small business",
    "website for service business tips",
    "local business online marketing",

    // Niche & identity
    "freelancer web developer",
    "hotlancer",
    "service business SEO",
  ],
  openGraph: {
    title: "Blog & Insights | Hasan Ali - Freelance Web Developer",
    description:
      "Web dev tips, SEO strategies, and tutorials to help service businesses grow online.",
    url: "https://mdhasanalikhan.vercel.app/blogs",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 628,
        alt: "Hasan Ali Blog - Web Development Insights",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights | Hasan Ali - Freelance Web Developer",
    description:
      "Web dev tips and SEO strategies for service businesses from a freelance developer.",
    images: ["/og-cover.jpg"],
    creator: "@hasan_ali_dev",
  },
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app/blogs",
  },
};

const Blog = () => {
  return (
    <Suspense fallback={<BlogLoadingSkeleton />}>
      <BlogsContent />
    </Suspense>
  );
};

export default Blog;
