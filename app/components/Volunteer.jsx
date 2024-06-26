"use client";
import Image from "next/image";
import React from "react";
import { image } from "../assets/images";
import Link from "next/link";
import { Animate } from "./Animate";

const Volunteer = () => {
  return (
    <Animate>
      <main className="w-full h-[400px] flex justify-center items-center">
        <div className="w-10/12 md:w-full max-w-7xl h-[300px] mx-auto rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-black/70 z-[5] "></div>
          <Image
            src={image.volunteer}
            alt="volunteer"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
          <div className="w-full h-full relative flex flex-col gap-10 justify-center items-center z-10 text-white">
            <h3 className="p-4 md:p-2 md:w-2/3 text-center text-base md:text md:text-4xl font-semibold md:leading-10">
              You can contribute to provide a place for children with special
              needs!
            </h3>
            <div className="text-black flex gap-5 md:gap-10">
              <Link
                href="contact"
                className="p-3 px-4 md:px-8 text-sm rounded-lg bg-bkg text-primary hover:-translate-y-2 transition-transform duration-500 ease-in-out"
              >
                Join as a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  );
};

export default Volunteer;
