
import Container from "@/component/ui/Container";

const BlogLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20">
      <Container>
        <div className="w-full">
          <div className="text-center mb-16 animate-pulse">
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gray-700/50 rounded-full">
              <span className="text-xs">&lt;/&gt;</span>
              <span>My Blog Space</span>
            </div>

            <div className="h-12 bg-gray-700/50 rounded-md w-3/4 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-700/50 rounded-md w-1/2 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
                    <div className="h-48 bg-gray-700/50"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-700/50 rounded-md mb-4"></div>
                      <div className="h-4 bg-gray-700/50 rounded-md w-1/2 mb-4"></div>
                      <div className="h-10 bg-gray-700/50 rounded-md"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 rounded-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-700/50 rounded-md mb-6"></div>
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-700/50 rounded-md"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogLoadingSkeleton;
