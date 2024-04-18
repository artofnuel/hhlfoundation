"use client";
import Image from "next/image";
import React from "react";
import { image } from "../assets/images";
import Link from "next/link";
import { FaMediumM } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="w-full  h-auto bg-black text-white p-4">
      <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={image.logo}
            alt="hhlfoundation logo"
            width={1000}
            height={1000}
            className="w-[130px] rounded-lg"
          />
        </Link>
        <ul className="flex md:gap-2">
          <li>
            <Link
              href="/blog"
              className="p-3 md:text-xl hover:text-bkg hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="p-3 md:text-xl hover:text-bkg hover:scale-110 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="w-full flex justify-center items-center gap-5">
        <a
          className="p-3 "
          href="https://www.instagram.com/hassan_hussienleckyfoundation?igsh=YWxta2ptenQ1dXM0"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaMediumM size={25} />
          </li>
        </a>

        <a
          className="p-3 "
          href="https://medium.com/@husseinleckyprojects"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaInstagram size={25} />
          </li>
        </a>
      </ul>
      <h4 className="text-white/50 text-xs text-center my-5">
        ©2018 Hassan and Hussein Lecky Foundation. All rights reserved.
      </h4>
    </main>
  );
};

export default Footer;
