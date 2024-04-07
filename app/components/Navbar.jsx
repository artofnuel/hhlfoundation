"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { image } from "../assets/images";

const Navbar = () => {
  return (
    <header className="p-5 text-center w-full max-w-7xl mx-auto h-20">
      <nav className="w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src={image.logo}
            alt="hhlfoundation logo"
            width={1000}
            height={1000}
            className="w-[150px]"
          />
        </Link>
        <div>
          <Link
            href="/contact"
            className="p-3 px-6 border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out rounded-lg"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
