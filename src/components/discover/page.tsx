import React from "react";
import Image from "next/image";
import DiscoverImg from "@/assets/images/discover-image.jpg";
import { FaArrowRight } from "react-icons/fa";

const DiscoverPage = () => {
  return (
    <div className="">
      <div className="bg-gray-100 w-full h-[320px] md:h-[420px] py-10 px-8 md:py-20 md:px-36 text-xl relative ">
        <h4 className="mt-8 md:mt-0 text-gray-600">Great Style For Everyone</h4>
        <h1 className="mt-8 text-2xl md:my-10 md:text-5xl md:w-2/3 leading-tight block text-gray-950 ">
          I Love to Help People Feel Great
          <span className="md:block md:mt-4 ">about How They Look.</span>
        </h1>
      </div>
      <div className="bg-[#c29f9e] w-full md:h-[600px] flex flex-col md:flex-row justify-between relative">
        <div className="w-full md:w-1/2 flex justify-center md:pl-10 mb-52 md:m-0">
          <Image
            src={DiscoverImg}
            alt="Dicover Image"
            className="absolute w-[360px] h-[520px]  md:w-[480px] md:h-[720px] z-10 -mt-14 rounded-sm "
          />
        </div>
        <div className="w-full h-[700px] md:h-0 md:w-1/2 mt-40 md:mt-0 px-6 md:px-0">
          <h3 className="pt-36 text-white max-w-[300px] text-lg md:max-w-[380px] md:text-2xl block w-[500px] tracking-wide font-semibold ">
            Discover Your Personal Style and the Confidence That Comes with It.
          </h3>
          <p className="py-10 text-md md:text-[18px] text-white block w-full md:w-[530px]">
            Working with Sarah has completely transformed my style and
            confidence. Her keen eye for detail and understanding of my personal
            preferences have helped me discover a new wardrobe that I absolutely
            love. I highly recommend her services to anyone looking to elevate
            their fashion game.
          </p>
          <div className="text-white text-sm md:text-xl md:text-[16px] border rounded-md w-[120px] md:w-[180px] py-2 md:py-3 md:px-2 flex items-center hover:bg-white hover:opacity-60 hover:text-black cursor-pointer">
            <FaArrowRight className="mx-2" />
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
