import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import BgImage from "@/assets/images/bg-img.jpg";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const ConsultationsPage: FC = () => {
  return (
    <div className="relative w-full h-[700px] md:h-screen overflow-hidden">
      <Image
        src={BgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-[-1] w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-700 mix-blend-multiply opacity-50 z-[-1]" />
      <div className="flex flex-col justify-center items-center text-gray-50 text-center px-4 py-8 md:px-8 md:py-16">
        <h2 className="text-lg md:text-xl w-max border-b-4 border-border- pb-4 mt-6 font-montserrat">
          Contact Me
        </h2>
        <h1 className="text-4xl md:text-6xl text-gray-300 font-montserrat my-10 md:my-12">
          Consultations Are Free!
        </h1>
        <p className="text-md md:text-lg leading-8 font-montserrat mb-2 text-gray-300 max-w-md md:max-w-4xl">
          Discover the best version of yourself with a free consultation.
          Whether you are looking to revamp your wardrobe, get styling tips, or
          need a complete makeover, we are here to help. Let us discuss your
          needs and create a personalized plan just for you!
        </p>
      </div>
      <div className="flex items-center m-auto gap-3 border rounded-sm hover:border-[#c19e9e] text-gray-100 text-center w-[160px] py-2 px-2 md:py-3 md:px-3 hover:bg-[#c19e9e] hover:text-white transition ease-in-out">
        <FaArrowRight />
        <span>Get Started</span>
      </div>
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 my-14 md:mt-18 ">
        <li className="flex items-center justify-center text-xl bg-gray-200 w-9 h-9 text-black rounded-full hover:bg-[#c19e9e] transition duration-300 ease-in-out">
          <Link href="https://www.facebook.com/login/">
            <FaFacebookF />
          </Link>
        </li>
        <li className="flex items-center justify-center text-xl bg-gray-200 w-9 h-9 text-black rounded-full hover:bg-[#c19e9e] transition duration-300 ease-in-out">
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
        </li>
        <li className="flex items-center justify-center text-xl bg-gray-200 w-9 h-9 text-black rounded-full hover:bg-[#c19e9e] transition duration-300 ease-in-out">
          <Link href="https://x.com/?lang=en">
            <FaTwitter />
          </Link>
        </li>
        <li className="flex items-center justify-center text-xl bg-gray-200 w-9 h-9 text-black rounded-full hover:bg-[#c19e9e] transition duration-300 ease-in-out">
          <Link href="https://www.youtube.com/">
            <FaYoutube />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ConsultationsPage;
