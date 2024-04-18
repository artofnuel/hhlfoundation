"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { image } from "../assets/images";
import { FaUserGroup } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { Animate } from "./Animate";

const Approach = () => {
  return (
    <Animate>
      <main className="min-h-screen flex flex-col">
        <div className="w-full h-[200px] md:h-[350px]"></div>
        <div className="w-full md:h-auto h-[1300px] py-10 bg-bkg relative mx-auto pb-10">
          <div className="w-full flex justify-center items-center">
            <Image
              src={image.img3}
              alt="Our approach"
              width={1000}
              height={1000}
              className="w-10/12 lg:max-w-6xl h-[300px] object-cover rounded-lg drop-shadow-xl absolute top-[-20] md:-top-[250px] lg:-top-[25%] "
            />
          </div>
          <div className=" flex flex-col justify-end items-center">
            <h2 className="mt-44 md:my-10 text-2xl md:text-4xl font-semibold text-white">
              Our Approach
            </h2>
            <div className="p-5 md:p-0 w-full my-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 text-white">
              <div className="rounded-lg mx-auto md:w-full h-auto md:h-[300px] flex flex-col justify-between items-start p-5 relative">
                <div className="w-full h-full absolute bg-black/55 inset-0 z-[5] rounded-lg"></div>
                <Image
                  src={image.img13}
                  alt="Our approach"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover absolute inset-0 rounded-lg"
                />
                <h3 className="flex gap-3 justify-center items-center uppercase font-bold z-10">
                  <FaUserGroup />
                  Partnership
                </h3>
                <p className="pt-3 text-left font-base font-light z-10">
                  Collaborating with other social enterprise and non-profit
                  organizations with similar focus areas and objectives to
                  extend our impact and deepen our work within the communities
                  where we work.
                </p>
              </div>
              <div className="rounded-lg mx-auto md:w-full h-auto md:h-[300px] flex flex-col justify-between items-start p-5 relative">
                <div className="w-full h-full absolute bg-black/55 inset-0 z-[5] rounded-lg"></div>
                <Image
                  src={image.img4}
                  alt="Our approach"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover absolute inset-0 rounded-lg"
                />
                <h3 className="flex gap-3 justify-center items-center uppercase font-bold z-10">
                  <HiSpeakerphone />
                  Advocay
                </h3>
                <p className="pt-3 text-left font-base font-light z-10">
                  Carrying out sensitization activities and campaigns to
                  strengthen public awareness as well as help ensure successful
                  adoption of interventions across our various focus areas.
                </p>
              </div>
              <div className="rounded-lg mx-auto md:w-full h-auto md:h-[300px] flex flex-col justify-between items-start p-5 relative">
                <div className="w-full h-full absolute bg-black/55 inset-0 z-[5] rounded-lg"></div>
                <Image
                  src={image.img8}
                  alt="Our approach"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-top absolute inset-0 rounded-lg"
                />
                <h3 className="flex gap-3 justify-center items-center uppercase font-bold z-10">
                  <FaProjectDiagram />
                  Direct Interventions
                </h3>
                <p className="pt-3 text-left font-base font-light z-10">
                  Creating initiatives, projects and activities that directly
                  impact the lives of our target audience as well as help to
                  drive socio- economic empowerment for all.
                </p>
              </div>
              <div className="rounded-lg mx-auto md:w-full h-auto md:h-[300px] flex flex-col justify-between items-start p-5 relative">
                <div className="w-full h-full absolute bg-black/55 inset-0 z-[5] rounded-lg"></div>
                <Image
                  src={image.img6}
                  alt="Our approach"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover absolute inset-0 rounded-lg"
                />
                <h3 className="flex gap-3 justify-center items-center uppercase font-bold z-10">
                  <MdPolicy />
                  Policy
                </h3>
                <p className="pt-3 text-left font-base font-light z-10">
                  Actively contribute to creating sound policy frameworks at all
                  levels across our focus areas to support accelerated
                  investment in sustainable development and equal economic
                  opportunities for all
                </p>
              </div>
            </div>
            <div className="my-10 text-center space-y-2">
              <p className="flex flex-col text-white font-bold text-xl md:text-4xl">
                Our Focus:
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Technological Skill Development",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Agricultural Value Chain",
                    1000,
                    "Quality Education",
                    1000,
                    "Affordable and Quality Healthcare",
                    1000,
                    "Girl Child Empowerment",
                    1000,
                    "Skill Acquisition",
                    1000,
                  ]}
                  className=""
                  wrapper="span"
                  speed={35}
                  deletionSpeed={30}
                  repeat={Infinity}
                />
              </p>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  );
};

export default Approach;
