"use client";
import Image from "next/image";
import React from "react";
import { image } from "../assets/images";
import { FaUserGroup } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";

const Approach = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full h-[250px]"></div>
      <div className="w-full h-auto bg-bkg relative mx-auto pb-10">
        <div className="w-full flex justify-center items-center">
          <Image
            src={image.img3}
            alt="Our approach"
            width={1000}
            height={1000}
            className="w-10/12 md:max-w-6xl h-[300px] object-cover rounded-lg drop-shadow-xl absolute top-[-20] md:-top-[25%] "
          />
        </div>
        <div className="md:h-[600px] h-[1200px] flex flex-col justify-end items-center">
          <h2 className="mt-8 text-2xl md:text-4xl font-semibold text-white">
            Our Approach
          </h2>
          <div className="w-full my-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
            <div className="bg-white rounded-lg w-10/12 mx-auto md:w-full h-auto md:h-40 flex flex-col justify-center items-center p-5">
              <h3 className="flex gap-3 justify-center items-center uppercase font-bold">
                <FaUserGroup />
                Partnership
              </h3>
              <p className="pt-3 text-center font-base font-light">
                Collaborating with other social enterprise and non-profit
                organizations with similar focus areas and objectives to extend
                our impact and deepen our work within the communities where we
                work.
              </p>
            </div>
            <div className="bg-white rounded-lg w-10/12 mx-auto md:w-full h-auto md:h-40 flex flex-col justify-center items-center p-5">
              <h3 className="flex gap-3 justify-center items-center uppercase font-bold">
                <HiSpeakerphone />
                Advocay
              </h3>
              <p className="pt-3 text-center font-base font-light">
                Carrying out sensitization activities and campaigns to
                strengthen public awareness as well as help ensure successful
                adoption of interventions across our various focus areas.
              </p>
            </div>
            <div className="bg-white rounded-lg w-10/12 mx-auto md:w-full h-auto md:h-40 flex flex-col justify-center items-center p-5">
              <h3 className="flex gap-3 justify-center items-center uppercase font-bold">
                <FaProjectDiagram />
                Direct Interventions
              </h3>
              <p className="pt-3 text-center font-base font-light">
                Creating initiatives, projects and activities that directly
                impact the lives of our target audience as well as help to drive
                socio- economic empowerment for all.
              </p>
            </div>
            <div className="bg-white rounded-lg w-10/12 mx-auto md:w-full h-auto md:h-40 flex flex-col justify-center items-center p-5">
              <h3 className="flex gap-3 justify-center items-center uppercase font-bold">
                <MdPolicy />
                Policy
              </h3>
              <p className="pt-3 text-center font-base font-light">
                Actively contribute to creating sound policy frameworks at all
                levels across our focus areas to support accelerated investment
                in sustainable development and equal economic opportunities for
                all
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Approach;
