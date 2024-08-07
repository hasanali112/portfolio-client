"use client";

import { Button } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
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
    <div className=" rounded-lg lg:w-full xl:w-[900px] h-[550px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 ">
          <div className="flex space-x-4">
            <input
              type="text"
              {...register("firstName")}
              placeholder="First name"
              className="w-full h-12 p-2 bg-[#1c222a] border border-[#6c6a6d] rounded-md focus:outline-none text-[#6c6a6d]"
            />
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last name"
              className="w-full h-12 p-2 bg-[#1c222a] border border-[#6c6a6d] rounded-md focus:outline-none text-[#6c6a6d]"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              {...register("email")}
              placeholder="Email address"
              className="w-full h-12 p-2 bg-[#1c222a]  border border-[#6c6a6d] rounded-md focus:outline-none text-[#6c6a6d]"
            />
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone number"
              className="w-full h-12 p-2 bg-[#1c222a] border border-[#6c6a6d] rounded-md focus:outline-none text-[#6c6a6d]"
            />
          </div>
          <div>
            <input
              type="text"
              {...register("subject")}
              placeholder="Subject"
              className="w-full h-12 p-2 bg-[#1c222a] border border-[#6c6a6d] rounded-md focus:outline-none text-[#6c6a6d]"
            />
          </div>
          <div>
            <textarea
              {...register("message")}
              placeholder="Message"
              rows={8}
              className="w-full  p-2 bg-[#1c222a] border border-[#6c6a6d] rounded-md focus:outline-none text-[#6c6a6d]"
            ></textarea>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-[#f8b90c] rounded-full text-white w-[50%] mx-[25%] text-xl mt-4"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
