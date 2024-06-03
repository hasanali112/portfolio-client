import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1b1f3d] w-[40%] mx-auto fixed top-0 left-0 right-0 z-50 rounded-full border border-purple-500">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex justify-around items-center space-x-4">
              <Link href="#">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#blog">Blog</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
