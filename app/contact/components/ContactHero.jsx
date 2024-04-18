import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { Animate } from "@/app/components/Animate";
import Image from "next/image";
import { image } from "@/app/assets/images";

const ContactHero = () => {
  return (
    <Animate>
      <main className="w-full h-auto p-5 md:h-screen bg-bkg text-white relative">
        <div className="w-full h-full absolute inset-0 z-[1] bg-black/50"></div>
        <div className="w-full h-full absolute inset-0 z-0">
          <Image
            src={image.bkg}
            alt="contact hero image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center relative z-10">
          <div className="w-full md:w-1/2 p-4 md:text-right flex flex-col justify-center items-start md:items-end gap-5">
            <h1 className="text-lg font-normal">Contact Us</h1>
            <h2 className="text-lg md:text-4xl font-bold">{`We'd love to hear from you`}</h2>
            <p className="font-normal text-base">
              Have any question in mind or want to enquire?
              <br /> Please feel free to contact us through the form or the
              following details.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-start gap-5">
            <p className="text-lg font-bold flex flex-col gap-2">
              Let's Talk!
              <span className="text-base font-normal flex flex-col md:flex-row justify-center gap-3">
                <span>Phone Number</span>
                <span>husseinleckyprojects@gmail.com</span>
              </span>
            </p>
            <p className="text-lg font-bold flex flex-col gap-2">
              Headoffice
              <span className="text-base font-normal">
                <span>Location</span>
              </span>
            </p>
            <div className="flex gap-5 p-3 border-white border-2 rounded-lg">
              <a
                className="hover:text-white/100 hover:scale-125 transition-all duration-500 ease-in-out"
                href="https://www.instagram.com/hassan_hussienleckyfoundation?igsh=YWxta2ptenQ1dXM0"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>

              <a
                className="hover:text-white/100 hover:scale-125 transition-all duration-500 ease-in-out"
                href="https://medium.com/@husseinleckyprojects"
                target="_blank"
                rel="noreferrer"
              >
                <FaMediumM size={30} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  );
};

export default ContactHero;
