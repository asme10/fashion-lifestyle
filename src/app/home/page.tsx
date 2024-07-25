import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import BgImage from "@/assets/images/bg-img.jpg";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Homepage: FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-screen overflow-hidden">
      <Image
        src={BgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-[-1] w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-700 mix-blend-multiply opacity-50 z-[-1]" />
      <div className="absolute w-full mt-32 ml-8 md:ml-32 flex flex-col text-white p-4 bg-opacity-50 md:gap-6">
        <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-gray-300">
          Fashion Style with
          <span className=" text-4xl md:text-6xl py-6 text-gray-300 md:py-12 block">
            S.A.R.A.H!
          </span>
        </h1>
        <div className="flex flex-col md:flex-row flex-1 md:items-center">
          <div className="bg-black text-xl bg-opacity-25 md:px-2 md:py-3 mb-6 text-white transition duration-300 ease-in-out hover:bg-gray-300   hover:text-black border  border-1 border-gray-400 rounded-md cursor-pointer flex items-center w-[170px] md:w-[200px] py-2 px-3">
            <FaArrowRight className=" text-xl md:text-2xl md:me-2 " />
            <span className="ml-2 text-xl">Learn More</span>
          </div>
          <Link
            href="https://www.youtube.com/"
            className="flex flex-base -ml-4 md:items-center md:ml-20 pb-5 my-4 bg-opacity-25 transition duration-300 ease-in-out hover:text-gray-300 cursor-pointer md:text-xl text-white"
          >
            <MdOutlineSlowMotionVideo className=" text-3xl md:text-2xl mx-3" />
            <span className="text-xl md:text-sm">Watch Video</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
