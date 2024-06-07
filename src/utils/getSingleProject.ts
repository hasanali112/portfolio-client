export const singleProjectDetail = async (id: string) => {
  const res = await fetch(
    `https://portfolio-server-eight-sooty.vercel.app/api/v1/projects/${id}`,
    {
      cache: "no-cache",
    }
  );
  const result = await res.json();
  return result;
};
