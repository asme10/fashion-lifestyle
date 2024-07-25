import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import BgImage from "@/assets/images/bg-img.jpg";

const ContactHeroPage: FC = () => {
  return (
    <div className="relative w-full h-[640px] md:h-screen overflow-hidden">
      <Image
        src={BgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-[-1] w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-700 mix-blend-multiply opacity-50 z-[-1]" />
      <div className="absolute w-full flex flex-col text-white px-6 py-16 bg-opacity-50 top-24 md:bottom-36 md:px-32">
        <p className="text-lg font-montserrat md:text-xl">
          Because Style Matters
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl max-w-[700px] my-6 md:my-10 font-medium tracking-wider leading-relaxed">
          <div className="md:my-4">Let Me Help You Find the</div>
          <div className="md:mb-4">Perfect Look for Every</div>
          <div className="">Occasion.</div>
        </h2>
      </div>
    </div>
  );
};

export default ContactHeroPage;
