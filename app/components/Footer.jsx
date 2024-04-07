"use client";
import Image from "next/image";
import React from "react";
import { image } from "../assets/images";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="w-full  h-auto bg-primary text-white p-4">
      <div className="w-full max-w-7xl mx-auto h-auto flex justify-between items-start">
        <div className="md:w-[200px]">
          <Image
            src={image.logo}
            alt="logo"
            width={1000}
            height={1000}
            className="rounded-lg "
          />
        </div>
      </div>
      <nav>
        <ul className="w-full my-5 text-white/70 text-center grid grid-cols-2 lg:grid-cols-4  justify-center items-center gap-10 capitalize">
          <Link
            href="/"
            className="p-3 w-1/2 mx-auto border-b-2 border-white/70 hover:border-white/100 hover:text-white/100 hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <li>Home</li>
          </Link>
          <Link
            className="p-3 w-1/2 mx-auto border-b-2 border-white/70 hover:border-white/100 hover:text-white/100 hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            href="/contact"
          >
            <li>contact</li>
          </Link>

          <a
            className="p-3 w-1/2 mx-auto border-b-2 border-white/70 hover:border-white/100 hover:text-white/100 hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            href="https://www.instagram.com/hassan_hussienleckyfoundation?igsh=YWxta2ptenQ1dXM0"
            target="_blank"
            rel="noreferrer"
          >
            <li>instagram</li>
          </a>

          <a
            className="p-3 w-1/2 mx-auto border-b-2 border-white/70 hover:border-white/100 hover:text-white/100 hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            href="https://medium.com/@husseinleckyprojects"
            target="_blank"
            rel="noreferrer"
          >
            <li>medium</li>
          </a>
        </ul>
      </nav>
      <h4 className="text-white/50 text-center my-5">
        ©2018 Hassan and Hussein Lecky Foundation. All rights reserved.
      </h4>
    </main>
  );
};

export default Footer;
