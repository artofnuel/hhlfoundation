import React from "react";
import { ourEvent } from "./data";
import { MdEventNote } from "react-icons/md";

const Events = () => {
  return (
    <main className="w-full h-auto my-10 max-w-7xl mx-auto">
      <h4 className="text-xl md:text-4xl font-semibold text-black my-10 text-center">
        Our Events
      </h4>
      <div className="p-5 w-full flex flex-wrap gap-4">
        {ourEvent.map((item, index) => (
          <div
            key={index}
            className="h-40 bg-yellow-300 flex-grow rounded-lg p-5"
            style={{ flexBasis: "calc(50% - 8px)" }}
          >
            <div className="w-full h-full flex flex-col justify-evenly items-start">
              <div className="flex gap-1 justify-start items-center bg-white pr-1 rounded-r-lg">
                <div className="w-[5px] h-[35px] bg-primary"></div>
                <h3 className="text-lg md:text-xl font-semibold text-black flex justify-start items-center gap-4">
                  <MdEventNote />
                  {item.title}
                </h3>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Events;
