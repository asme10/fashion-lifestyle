import React from "react";
import Image from "next/image";
import Link from "next/link";
import BgImage from "@/assets/images/bg-img.jpg";
import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImQuotesRight } from "react-icons/im";

const ContactFormsPage = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center p-8 pb-gray-50 justify-between md:mx-28 mb-16 md:my-32">
      <div className="w-full mt-36 md:mt-0 md:w-1/2 relative">
        <div className=" absolute flex justify-start text-[200px] md:text-[280px] text-[#FEF7F4] -mt-40 md:-mt-60">
          <ImQuotesRight />
        </div>
        <blockquote className=" absolute text-lg md:text-base text-gray-700 mb-6 m-w-[400px] md:w-[500px] leading-8 -mt-24">
          Connecting with people and understanding their needs is the
          cornerstone of my work. Let us start a conversation and discover how
          we can make you look and feel your best.
        </blockquote>

        <div className="flex gap-6 items-center pt-24 md:pt-4">
          <Image
            src={BgImage}
            alt="Contact Image "
            layout="full"
            objectFit="cover"
            quality={75}
            className="w-20 h-20 rounded-full"
          />
          <p className="text-2xl md:text-base mb-4"> Sarah Mark</p>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6 mt-6 py-4">
          <MdEmail className="text-2xl" />
          <p className="text-md">sharahfashion@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <FaPhone className="text-2xl" />
          <p className="text-md">+447659374937</p>
        </div>

        <ul className="flex justify-center text-center md:text-left md:justify-start gap-6 md:gap-4 my-10 md:mt-8">
          <li className="flex items-center justify-center text-xl bg-[#c19e9e] w-9 h-9 text-white rounded-full hover:bg-black transition duration-300 ease-in-out">
            <Link href="https://www.facebook.com/login/">
              <FaFacebookF />
            </Link>
          </li>
          <li className="flex items-center justify-center text-xl bg-[#c19e9e] w-9 h-9 text-white rounded-full hover:bg-black transition duration-300 ease-in-out">
            <Link href="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </li>
          <li className="flex items-center justify-center text-xl bg-[#c19e9e] w-9 h-9 text-white rounded-full hover:bg-black transition duration-300 ease-in-out">
            <Link href="https://x.com/?lang=en">
              <FaTwitter />
            </Link>
          </li>
          <li className="flex items-center justify-center text-xl bg-[#c19e9e] w-9 h-9 text-white rounded-full hover:bg-black transition duration-300 ease-in-out">
            <Link href="https://www.youtube.com/">
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 ">
        <form action="">
          <div className="flex flex-col md:flex-row gap-6 ">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="name"
                className=" text-md md:text-sm mr-1 font-semibold"
              >
                Name
              </label>
              <span className="text-red-600"> *</span>
              <input
                type="text"
                className="w-full border rounded-sm bg-[#FAFAFA] py-2 px-2 focus: outline-none my-2"
                placeholder="First Name"
              />
            </div>
            <div className=" ">
              <label
                htmlFor="name"
                className="text-md md:text-sm mr-1 font-semibold"
              >
                Last name
              </label>
              <span className="text-red-600"> *</span>
              <input
                type="text"
                className="w-full border rounded-sm bg-[#FAFAFA] py-2 px-2 focus: outline-none my-2"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="my-4">
            <label
              htmlFor="email"
              className="text-md md:text-sm mr-1 font-semibold"
            >
              Email
            </label>
            <span className="text-red-600"> *</span>
            <input
              type="text"
              className="w-full border rounded-sm bg-[#FAFAFA] py-2 px-2 focus: outline-none my-2"
              placeholder="Email"
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="message"
              className="text-md md:text-sm mr-1 font-semibold"
            >
              Comment or Message
            </label>
            <span className="text-red-600"> *</span>
            <textarea
              className="w-full min-h-[120px] md:min-h-[200px] border rounded-sm bg-[#FAFAFA]  focus: outline-none my-2"
              name="message"
            ></textarea>
          </div>
          <div className="flex gap-3 border border-[#c19e9e] rounded-sm text-[#c19e9e] w-[160px] md:w-[200px] mt-8 md:mt-0 py-3 px-3 hover:bg-gray-600 hover:text-white transition ease-in-out">
            <span>Let us Get Started</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormsPage;
