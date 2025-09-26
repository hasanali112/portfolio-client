import Image from "next/image";
import {
  CalendarDays,
  UserRound,
  Clock,
  Eye,
  Heart,
  Share2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Container from "@/component/ui/Container";
import CommentSection from "./CommentSection";
import { getBlogById } from "@/services/blogService";

interface TDynamic {
  params: {
    blogId: string;
  };
}

const DynamicBlogDetail = async ({ params }: TDynamic) => {
  let blog = null;

  try {
    const singleBlogById = await getBlogById(params.blogId);
    blog = singleBlogById?.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Blog not found</p>
          <Link href="/blogs" className="text-blue-400 hover:text-blue-300">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628]">
      <Container>
        {/* Back Button */}
        <div className="pt-8 pb-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
        </div>

        {/* Hero Image Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={blog?.blogImage || "/placeholder.jpg"}
            alt={blog?.title || "Blog image"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full">
              {blog?.category || "Blog"}
            </span>
          </div>
        </div>

        <div className="pb-20">
          <article className="w-full mx-auto">
            {/* Article Header */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm p-8 mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {blog?.title || "Blog Title"}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <UserRound className="w-5 h-5 text-blue-400" />
                  <span>by {blog?.author?.name || "Hasan Ali"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-green-400" />
                  <span>
                    {formatDate(blog?.createdAt || new Date().toISOString())}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>{blog?.readTime || "5 min read"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <span>{blog?.views || 0} views</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                {blog?.description || "Blog description"}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span>{blog?.likes || 0}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm p-8 mb-8">
              <div
                className="text-gray-300 leading-relaxed space-y-6
                  [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mb-4
                  [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-3
                  [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-white [&>h3]:mb-2
                  [&>p]:text-gray-300 [&>p]:leading-relaxed [&>p]:mb-4
                  [&>a]:text-blue-400 [&>a]:underline hover:[&>a]:text-blue-300
                  [&>strong]:text-white [&>strong]:font-semibold
                  [&>em]:text-gray-200 [&>em]:italic
                  [&>ul]:list-disc [&>ul]:list-inside [&>ul]:text-gray-300 [&>ul]:space-y-2
                  [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:text-gray-300 [&>ol]:space-y-2
                  [&>li]:text-gray-300
                  [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-slate-800/50 [&>blockquote]:p-4 [&>blockquote]:rounded-r [&>blockquote]:text-gray-200
                  [&>code]:text-green-400 [&>code]:bg-slate-800 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm
                  [&>pre]:bg-slate-900 [&>pre]:border [&>pre]:border-slate-700 [&>pre]:p-4 [&>pre]:rounded [&>pre]:overflow-x-auto
                  [&>img]:rounded-lg [&>img]:my-6"
                dangerouslySetInnerHTML={{
                  __html: blog?.content || "Blog content",
                }}
              />
            </div>

            {/* Author Section */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {(blog?.author?.name || "Hasan Ali").charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {blog?.author?.name || "Hasan Ali"}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {blog?.author?.bio ||
                      "Full-stack developer passionate about creating amazing web experiences."}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Related Topics
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Node.js",
                  "web development",
                  "backend development",
                  "JavaScript",
                  "full-stack",
                  "Express.js",
                  "APIs",
                  "real-time apps",
                  "scalability",
                  "server-side development",
                ].map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50 hover:bg-slate-600/50 transition-colors cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-gray-400">
                <Eye className="w-4 h-4" />
                <span>{blog?.views || 0} views</span>
              </div>
            </div>

            {/* Dynamic Comments Section */}
            <CommentSection blogId={params.blogId} />
          </article>
        </div>
      </Container>
    </div>
  );
};

export default DynamicBlogDetail;
