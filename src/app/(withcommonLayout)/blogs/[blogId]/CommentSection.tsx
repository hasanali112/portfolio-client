"use client";
import { useState, useEffect } from "react";

interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}

interface CommentSectionProps {
  blogId: string;
}

const CommentSection = ({ blogId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://portfolio-dashboard-server-sage.vercel.app/api/v1/blog/${blogId}/comments`
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data.data || []);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [blogId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        `https://portfolio-dashboard-server-sage.vercel.app/api/v1/blog/${blogId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commentForm),
        }
      );

      if (response.ok) {
        const newComment = await response.json();
        setComments((prev) => [newComment.data, ...prev]);
        setCommentForm({ name: "", email: "", comment: "" });
        alert("Comment posted successfully!");
      } else {
        alert("Failed to post comment");
      }
    } catch (error) {
      alert("Error posting comment");
    } finally {
      setSubmitting(false);
    }
  };

  const formatCommentDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Leave a Comment</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={commentForm.name}
            onChange={(e) =>
              setCommentForm((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={commentForm.email}
            onChange={(e) =>
              setCommentForm((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full p-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
            required
          />
        </div>

        <textarea
          placeholder="Write your comment here..."
          rows={6}
          value={commentForm.comment}
          onChange={(e) =>
            setCommentForm((prev) => ({ ...prev, comment: e.target.value }))
          }
          className="w-full p-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
          required
        />

        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
        >
          {submitting ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments Display */}
      <div className="mt-12">
        <h4 className="text-xl font-bold text-white mb-6">
          Comments ({comments.length})
        </h4>

        <div className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h5 className="font-semibold text-white">
                        {comment.name}
                      </h5>
                      <span className="text-sm text-gray-400">
                        {formatCommentDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-8">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
