import Image from "next/image";
import ContactForm from "./ContactForm";
import contact from "@/assets/contact.jpg";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#111122] pt-20 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1400px] px-[20px] mx-auto ">
        <h1 className="text-center text-5xl font-bold text-white">
          Contact Me
        </h1>
        <p className="text-[#f8b90c] text-center mt-4">
          Any need, Feel free contact me
        </p>

        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          <div>
            <Image
              src={contact}
              alt="contact"
              width={400}
              height={400}
              className="w-[500px] rounded-md"
            />
            <h1 className="text-white mt-4">
              Are You Prepared to Boost Online Visibility for Your Company? I am
              available to assist you.
            </h1>
            <div className="flex mt-4 gap-4">
              <MapPin className="text-[#f8b90c] w-8 h-8" />
              <div className="text-white">
                <h1 className="text-xl font-bold">Address</h1>
                <p>Rajshahi, Bangladesh</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <Mail className="text-[#f8b90c] w-8 h-8" />
              <div className="text-white">
                <h1 className="text-xl font-bold">Mail</h1>
                <p>mdhasan.alikhan67@gmail.com</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <Phone className="text-[#f8b90c] w-8 h-8" />
              <div className="text-white">
                <h1 className="text-xl font-bold">Phone</h1>
                <p>+8801307034372 (WhatsApp)</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
