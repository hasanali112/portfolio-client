export const getBlogData = async () => {
  try {
    const res = await fetch(
      "https://portfolio-server-ecru-two.vercel.app/api/v1/blogs",
      {
        cache: "no-store",
      }
    );
    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error.message);
  }
};
