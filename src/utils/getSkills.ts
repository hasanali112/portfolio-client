export const getSkills = async () => {
  const res = await fetch(
    "https://portfolio-server-ecru-two.vercel.app/api/v1/skills",
    {
      cache: "no-cache",
    }
  );
  const result = await res.json();
  return result;
};
