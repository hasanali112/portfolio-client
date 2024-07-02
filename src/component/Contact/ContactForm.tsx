"use client";

import { Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    Swal.fire({
      title: "Sent!",
      text: "Message sent successfully!",
      icon: "success",
    });
    reset();
  };

  return (
    <div className=" mx-auto p-8  bg-gradient-to-r from-[#2a1650] to-[#522ba0]  border border-zinc-400 rounded-lg h-[790px] lg:h-[750px] w-full text-white">
      <h1 className="text-5xl font-bold text-purple-500 mb-2 tracking-wider">
        Let&apos;s work <span className="text-[#d9c7fc]">together!</span>
      </h1>
      <p className="mb-6 mt-4 tracking-wider">
        I design and code beautifully simple things and I love what I do. Just
        simple like that!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 ">
          <div className="flex space-x-4">
            <input
              type="text"
              {...register("firstName")}
              placeholder="First name"
              className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
            />
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last name"
              className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              {...register("email")}
              placeholder="Email address"
              className="w-full h-12 p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
            />
            <input
              type="text"
              {...register("phone")}
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
              {...register("message")}
              placeholder="Message"
              rows={9}
              className="w-full  p-2 bg-[#050709] border border-[#6c6a6d] rounded-md focus:outline-none"
            ></textarea>
          </div>
        </div>
        <Button
          type="submit"
          variant="bordered"
          className="border border-[#1ABC9C] hover:bg-[#1ABC9C] rounded-full text-white w-full"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
