"use client";
import React from "react";
import { image } from "../assets/images";
import Image from "next/image";

const Mission = () => {
  return (
    <main className="bg-bkg min-h-screen md:h-screen p-5 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <div className="w-full lg:w-3/6 md:h-full flex flex-col justify-center items-start">
          <div className="flex gap-3 justify-start items-center bg-white py-2 pr-2 rounded-r-lg">
            <div className="w-[10px] h-[35px] bg-primary"></div>
            <h3 className="text-xl md:text-4xl font-semibold text-black">
              Our Mission
            </h3>
          </div>
          <ul className="w-full list-disc pl-5 py-5 space-y-3 text-lg md:text-xl">
            <li className="p-1">
              Investing in economic and social development for all{" "}
              <span className=" p-1 bg-white rounded-md">
                irrespective of demographic difference.
              </span>
            </li>
            <li className="p-1">
              We believe that the youths deserve the opportunity to build{" "}
              <span className="p-1 bg-white rounded-md">
                a self sustaining future for his/herself
              </span>
            </li>
            <li className="p-1">
              We believe that the youths deserve access to quality{" "}
              <span className=" p-1 bg-white rounded-md" s>
                resources needed to help ensure their success in life.
              </span>
            </li>
          </ul>
          <button className="bg-white text-black p-3 px-5 rounded-md mt-10 border-2 border-primary relative hover:-translate-y-2 transition-transform duration-500 ease-in-out">
            Join the Mission
            <div className="w-4 h-4 bg-white border-4 border-primary rounded-full absolute -top-1 -right-1 animate-ping"></div>
          </button>
        </div>
        <div className="w-full lg:w-2/5 md:h-full">
          <Image
            src={image.hero}
            alt="hhlfoundation mission image"
            className="w-full h-full rounded-lg object-cover drop-shadow-2xl"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </main>
  );
};

export default Mission;
