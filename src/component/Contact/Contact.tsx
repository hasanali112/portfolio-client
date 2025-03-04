"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import contact from "@/assets/contact.jpg";
import { Mail, MapPin, Phone } from "lucide-react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["0 1", "0.5 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const xLeftValue = useTransform(scrollYProgress, [0, 1], [-1500, 0]);
  const xRightValue = useTransform(scrollYProgress, [0, 1], [1500, 0]);

  return (
    <div
      id="contact"
      ref={contactRef}
      className="bg-[#0f0715] pt-10 md:pt-20 lg:pb-20 md:pb-20 pb-10 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1400px] px-[25px] mx-auto overflow-hidden">
        <motion.div style={{ scale: scaleValue, transition: "0.5s ease" }}>
          <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold text-white">
            Contact Me
          </h1>
          <p className="text-[#89c9f4] text-center mt-4">
            Any need, Feel free contact me
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          <motion.div style={{ x: xLeftValue, transition: "0.8s ease" }}>
            <Image
              src={contact}
              alt="contact"
              width={400}
              height={400}
              className="w-[500px] md:w-full rounded-md"
            />
            <h1 className="text-white mt-4 max-w-[40ch]">
              Are You Prepared to Boost Online Visibility for Your Company? I am
              available to assist you.
            </h1>
            <div className="flex mt-4 gap-4">
              <MapPin className="text-[#89c9f4] w-8 h-8" />
              <div className="text-white">
                <h1 className="text-xl font-bold">Address</h1>
                <p>Rajshahi, Bangladesh</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <Mail className="text-[#89c9f4] w-8 h-8" />
              <div className="text-white">
                <h1 className="text-xl font-bold">Mail</h1>
                <p>mdhasan.alikhan67@gmail.com</p>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <Phone className="text-[#89c9f4] w-8 h-8" />
              <div className="text-white">
                <h1 className="text-xl font-bold">Phone</h1>
                <p>+8801307034372 (WhatsApp)</p>
              </div>
            </div>
          </motion.div>
          <motion.div style={{ x: xRightValue, transition: "0.8s ease" }}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
