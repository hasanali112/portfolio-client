export const getBlogData = async () => {
  const res = await fetch(
    "https://portfolio-server-eight-sooty.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  );
  const result = await res.json();

  return result;
};
