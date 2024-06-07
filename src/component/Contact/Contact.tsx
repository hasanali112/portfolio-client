import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#060818] pt-36 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1220px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1 flex flex-col lg:mt-48 gap-12">
            <div className="flex items-center gap-4">
              <span className="bg-[#7041cf] w-12 h-12 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <h2 className="text-white text-lg font-semibold">Phone</h2>
                <p className="text-gray-300">+8801307034372</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#7041cf] w-12 h-12 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <h2 className="text-white text-lg font-semibold">Email</h2>
                <p className="text-gray-300">mdhasan.alikhan67@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
