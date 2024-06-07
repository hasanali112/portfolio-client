import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="relative">
      <Image
        src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="blogImage"
        width={400}
        height={400}
        className="lg:w-[370px] w-full h-[370px] rounded-2xl "
      />
      <div className="bg-[#6839c0] lg:w-[320px] h-[83px] rounded-2xl pt-4 lg:translate-x-7 -translate-y-[100px]">
        <div className="flex justify-around">
          <h1>5/9/2023</h1>
          <h1>comment (0)</h1>
        </div>
        <p className="lg:text-2xl text-xl font-bold text-center">
          Top 10 Ui Ux Designers
        </p>
      </div>
      <div className="absolute top-3 left-3 bg-[#915cf4] rounded-2xl p-1">
        <h1>TUTORIAL</h1>
      </div>
    </div>
  );
};

export default BlogCard;
