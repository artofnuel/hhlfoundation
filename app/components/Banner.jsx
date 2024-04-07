import React from "react";

const Banner = ({ text, author }) => {
  return (
    <main className="w-full h-[300px] flex justify-center items-center">
      <div className="p-5 md:w-2/3 h-auto text-center">
        <blockquote className="text-sm md:text-base">
          <p>{text}</p>
        </blockquote>
        <p className="mt-5 md:w-1/2 w-full mx-auto p-3 rounded-md bg-bkg text-black font-semibold">
          - {author} -
        </p>
      </div>
    </main>
  );
};

export default Banner;
