import React from "react";
import MegicButton from "../ui/MegicButton";

const ContactForm = () => {
  return (
    <div className=" mx-auto p-8 bg-[#140d21] rounded-lg h-[750px] w-full text-white">
      <h1 className="text-5xl font-bold text-purple-500 mb-2 tracking-wider">
        Let&apos;s work <span className="text-[#d9c7fc]">together!</span>
      </h1>
      <p className="mb-6 mt-4 tracking-wider">
        I design and code beautifully simple things and I love what I do. Just
        simple like that!
      </p>
      <div className="space-y-6 ">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
          />
        </div>
        <div>
          <select className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none">
            <option>Choose Service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>SEO Optimization</option>
          </select>
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={9}
            className="w-full  p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
          ></textarea>
        </div>
        <MegicButton title="Send Message" className="w-full" />
      </div>
    </div>
  );
};

export default ContactForm;
