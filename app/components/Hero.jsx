"use client";
import React from "react";
import Image from "next/image";
import { image } from "../assets/images";
import { Animate } from "./Animate";

const Hero = () => {
  return (
    <Animate>
      <main className="w-full h-screen relative">
        <Image
          src={image.bkg2}
          alt="hhlfoundation homepage"
          width={1000}
          height={1000}
          className="object-cover object-center w-full h-full contrast-125 absolute inset-0 bg-fixed"
        />
        <div className="w-full h-full bg-black/30 absolute z-10"></div>
        <div className="z-20 absolute p-5 bottom-10 md:bottom-20 md:left-10">
          <h1 className="font-light text-xl md:text-4xl text-white flex flex-col">
            Hassan and Hussein <span className="">Lecky Foundation</span>
          </h1>
        </div>
        <div className="z-20 absolute p-5 inset-x-0 bottom-8 md:bottom-[85px]">
          <div className="w-[60%] md:w-[30%] h-[1.5px] bg-white md:mx-auto"></div>
        </div>
        <div className="z-20 absolute p-5 bottom-0 md:bottom-20 md:right-10">
          <h1 className="font-light text-base md:text-4xl text-white block md:flex flex-col">
            Empowering everyone{" "}
            <span className="hidden md:block">community at a time</span>
          </h1>
        </div>
      </main>
    </Animate>
  );
};

export default Hero;
