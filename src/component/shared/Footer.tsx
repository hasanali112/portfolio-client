const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4"></div>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="#services" className="hover:text-purple-500">
              Services
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-purple-500">
              Works
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-purple-500">
              Resume
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-purple-500">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-purple-500">
          © 2024 All rights reserved by{" "}
          <a href="https://themejunction.com" className="hover:underline">
            Hasan
          </a>
        </p>
        <div className="mt-4">
          <a
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
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
