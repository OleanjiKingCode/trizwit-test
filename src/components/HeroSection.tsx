import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-row px-[10%] bg-girl md:bg-none bg-center bg-no-repeat bg-contain items-center justify-between">
      <Image
        alt="testImage"
        src="/left.jpeg"
        width={300}
        height={300}
        className="hidden md:block"
      />
      <div className="flex flex-col items-start w-full md:w-[50%] gap-5  justify-start">
        <span className="hidden md:block text-3xl font-semibold ">
          For every student, every classroom.{" "}
          <span className="border-b-[2px] border-gray-300">Real results.</span>
        </span>
        <span className="block md:hidden text-2xl leading-10 font-semibold ">
          <mark className="bg-white md:bg-transparent">
            For every student, every classroom. Real results.
          </mark>
        </span>
        <span className="">
          <mark className="bg-white md:bg-transparent">
            We're a nonprofit with the mission to provide a free, world-class
            education for anyone, anywhere.
          </mark>
        </span>
        <button className="text-white font-medium bg-blue-500 py-2 px-3 rounded-md w-full md:w-fit">
          Start here
        </button>
      </div>
    </div>
  );
}
