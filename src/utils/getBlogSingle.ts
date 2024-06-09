export const singleBlog = async (_id: string) => {
  const res = await fetch(
    `https://portfolio-server-eight-sooty.vercel.app/api/v1/blogs/${_id}`,
    {
      cache: "no-store",
    }
  );
  const result = await res.json();
  return result;
};
