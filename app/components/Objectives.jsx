"use client";
import React from "react";
import { image } from "../assets/images";
import Image from "next/image";
import Link from "next/link";
import { Animate } from "./Animate";

const Objectives = () => {
  return (
    <Animate>
      <main className="bg-bkg min-h-screen md:h-screen p-5 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-between items-start gap-5 text-primary">
          <div className="w-full lg:w-2/5 md:h-full">
            <Image
              src={image.img7}
              alt="hhlfoundation mission image"
              className="w-full h-full rounded-lg object-cover drop-shadow-2xl"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full lg:w-3/6 md:h-full flex flex-col justify-center items-start">
            <div className="flex gap-3 justify-start items-center bg-white py-2 pr-2 rounded-r-lg">
              <div className="w-[10px] h-[35px] bg-primary"></div>
              <h3 className="text-blacktext-xl md:text-4xl font-semibold text-black">
                Our Objectives
              </h3>
            </div>
            <ul className="w-full list-disc pl-5 py-5 space-y-3 text-lg md:text-xl">
              <li className="p-1">
                Create an array of{" "}
                <span className=" p-1 bg-white rounded-md">
                  Opportunities for the youth.
                </span>
              </li>
              <li className="p-1">
                Building access to{" "}
                <span className=" p-1 bg-white rounded-md">
                  quality health, education and agriculture.
                </span>
              </li>
              <li className="p-1">
                Creating partnerships{" "}
                <span className=" p-1 bg-white rounded-md">
                  to extend our impact.
                </span>
              </li>
              <li className="p-1">
                Empowering all individuals{" "}
                <span className=" p-1 bg-white rounded-md">
                  between ages 10 to 40.
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="bg-white text-black p-3 px-5 rounded-md mt-10 border-2 border-primary relative hover:-translate-y-2 transition-transform duration-500 ease-in-out"
            >
              Aid our Goals
              <div className="w-4 h-4 bg-white border-4 border-primary rounded-full absolute -top-1 -right-1 animate-ping"></div>
            </Link>
          </div>
        </div>
      </main>
    </Animate>
  );
};

export default Objectives;
