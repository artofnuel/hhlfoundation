"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { image } from "../assets/images";

const Navbar = () => {
  return (
    <header className="bg-white p-5 text-center w-full h-20">
      <nav className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={image.logo}
            alt="hhlfoundation logo"
            width={1000}
            height={1000}
            className="w-[130px]"
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
    </header>
  );
};

export default Navbar;
