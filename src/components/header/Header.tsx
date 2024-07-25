"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLink = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-gray-100 w-full text-gray-800 flex justify-between items-center shadow-md py-2 px-4 md:py-4 md:px-20 overflow-x-hidden">
      <div className="text-xl md:text-2xl font-extrabold ">
        <Link
          href="/"
          className="hover:text-gray-500 transition duration-500 tracking-widest"
        >
          SARAH
          <span className="text-sm font-light tracking-normal block">
            Fashion Lifestyle
          </span>
        </Link>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose size={25} /> : <RiMenu2Fill size={25} />}
      </div>
      <ul
        className={`md:flex flex-col md:flex-row gap-8 text-xl md:text-md ${
          menuOpen ? "block" : "hidden"
        } md:block absolute md:relative  bg-[#c19e9e] md:bg-transparent top-16 left-0 px-6 md:py-2 md:px-4 z-20 md:z-0 md:top-0 w-full md:w-auto h-[600px] md:h-0 transition duration-500 ease-in-out`}
      >
        <li
          className="hover:text-orange-500 transition duration-300 py-2 border-b-[2px] border-b-[#ae9191] md:border-none md:py-0"
          onClick={handleLink}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className=" hover:text-orange-500 transition duration-300 py-2 border-b-[2px] border-b-[#ae9191] md:border-none md:py-0"
          onClick={handleLink}
        >
          <Link href="/blog/">Blog</Link>
        </li>
        <li
          className=" hover:text-orange-500 transition duration-300 py-2 border-b-[2px] border-b-[#ae9191] md:border-none md:py-0"
          onClick={handleLink}
        >
          <Link href="/contact/">Contact</Link>
        </li>
        <div className="flex flex-col md:flex-row text-xl md:text-md gap-4 md:gap-6 md:text-xl mt-2 md:mt-0 ">
          <Link
            href="https://x.com/"
            className=" hover:text-orange-500 transition duration-300 py-2 border-b-[2px] border-b-[#ae9191] md:border-none md:py-0"
            onClick={handleLink}
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className=" hover:text-orange-500 transition duration-300  py-2  border-b-[2px] border-b-[#ae9191] md:border-none md:py-0"
            onClick={handleLink}
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com/"
            className=" hover:text-orange-500 transition duration-300  py-2  border-b-[2px] border-b-[#ae9191] md:border-none md:py-0"
            onClick={handleLink}
          >
            <FaYoutube />
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Header;
