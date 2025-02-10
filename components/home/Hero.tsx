"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mediboard <br /> Your Digital Medical Records Hub
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            A simple and secure way to manage patient and medicine records.
            Stay organized and access critical health information anytime, anywhere.
        </p>
      </div>
    </div>
  );
}

export default Hero;
