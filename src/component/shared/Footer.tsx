import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#241232] via-[#0f0715] to-[#291746] text-white py-6 shadow-sm shadow-[#7242d1]">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4"></div>
        <ul className="flex justify-center space-x-2 lg:space-x-6 mb-4">
          <li>
            <Link href="#" className="hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-purple-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-purple-500">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-purple-500">
              Project
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-purple-500">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-500">
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-purple-500">
          © 2024 All rights reserved by{" "}
          <Link href="#" className="hover:underline">
            Hasan
          </Link>
        </p>
        <div className="mt-4">
          <Link
            href="#top"
            className="inline-block p-2 bg-purple-500 rounded-full hover:bg-purple-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
