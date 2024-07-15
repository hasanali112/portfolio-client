export const singleBlog = async (_id: string) => {
  try {
    const res = await fetch(
      `https://portfolio-server-ecru-two.vercel.app/api/v1/blogs/${_id}`,
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
