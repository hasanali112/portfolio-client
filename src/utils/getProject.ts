export const getProject = async () => {
  const res = await fetch(
    "https://portfolio-server-eight-sooty.vercel.app/api/v1/projects",
    {
      cache: "no-cache",
    }
  );
  const result = await res.json();
  return result;
};
