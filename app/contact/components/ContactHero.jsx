import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";

const ContactHero = () => {
  return (
    <main className="w-full h-auto p-5 md:h-screen bg-bkg text-primary">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center">
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
          <div className="flex gap-5 p-3 border-primary border-2 rounded-lg">
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
  );
};

export default ContactHero;
