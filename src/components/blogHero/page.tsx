import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import BgHero from "@/assets/images/bg-hero.jpg";
import HeroCardImg from "@/assets/images/HeroCardImg.avif";

const BlogHeroPage: FC = () => {
  return (
    <>
      <div className="relative w-full h-[700px] md:h-screen overflow-hidden">
        <Image
          src={BgHero}
          alt="Hero Background Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="z-1"
        />

        <div className="absolute inset-0 bg-black opacity-50 z-10">
          <div className="w-full mt-20 md:mt-28 ml-8 md:ml-32 flex flex-col text-white p-4 bg-opacity-50 z-[-1]">
            <h1 className="text-5xl md:text-6xl font-semibold">Blog!</h1>
          </div>
        </div>
      </div>
      <div className="absolute w-[400px] md:w-[90%] max-w-[520px] h-auto md:h-[640px] rounded-md top-[28%] md:top-[42%] mx-4 md:ml-36 z-10 shadow-md border-[#c29f9e] border bg-[#c29f9e]">
        <Image
          src={HeroCardImg}
          alt="Blog Card Image"
          objectFit="cover"
          layout="responsive"
          width={520}
          height={300}
          className="rounded-t-md"
        />
        <div className="flex flex-col mx-6 md:mx-10 text-gray-50 py-8">
          <h3 className="text-xl md:text-2xl pb-4">Street Shopping Tips</h3>
          <p className="text-sm md:text-md pb-3">March 14, 2019</p>
          <p className="text-sm md:text-md pb-3">
            Discover the hidden gems of street shopping with our expert tips!
            From bargaining tactics to finding unique items, we have got you
            covered. Learn how to navigate crowded markets and uncover the best
            deals.
          </p>
          <div
            className="bg-[#373f42] border-none w-[120px] md:w-[140px] py-2 px-4 md:px-6 my-3 text-gray-50 
          hover:text-opacity-65 cursor-pointer text-center"
          >
            Read More
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeroPage;
