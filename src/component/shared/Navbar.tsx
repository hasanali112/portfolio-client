import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1b1f3d] lg:w-[45%] w-[85%] mx-auto fixed top-0 left-0 right-0 z-50 rounded-full border border-zinc-500 hidden lg:block">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div>
            <div className="flex  justify-around items-center lg:space-x-4">
              <Link
                href="#"
                className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
              >
                Projects
              </Link>
              <Link
                href="#blog"
                className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
