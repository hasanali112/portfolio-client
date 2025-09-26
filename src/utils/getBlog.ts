export const getBlogData = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/v1/blog",
      {
        cache: "no-store",
      }
    );
    
    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return { data: [] };
    }
    
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error.message);
    return { data: [] };
  }
};
