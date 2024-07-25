import React from "react";
import Image from "next/image";
import TestimonialsProfile from "@/assets/images/testiProfile.jpg";

const TestimonialsPage = () => {
  return (
    <div className="bg-[#fcf5f2] flex flex-col items-center justify-center my-12 md:my-32 px-4 md:px-8 lg:px-16 py-8 md:py-16 w-full h-[660px]">
      <h2 className="text-lg md:text-md border-b-2 border-black pb-2 md:pb-4 mt-4 md:mt-10">
        Testimonials
      </h2>
      <h1 className="text-3xl md:text-5xl font-montserrat my-12 text-center">
        My Happy Clients!
      </h1>
      <p className="text-base md:text-xl text-center max-w-[90%] md:max-w-[850px] mb-6 md:mb-12 text-gray-700 leading-7 md:leading-8 font-normal ">
        Working with this styling service has been a transformative experience.
        The team has an incredible eye for fashion and truly understands how to
        enhance individual beauty. I have never felt more confident in my own
        skin.
      </p>
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="flex items-center mb-4 md:mb-0 ">
          <Image
            src={TestimonialsProfile}
            alt="Discover Image"
            objectFit="cover"
            width={80}
            height={80}
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
          />
          <p className="text-base md:text-lg text-gray-700 ml-2 md:ml-4 mt-2 md:mt-0">
            Sandra David
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
