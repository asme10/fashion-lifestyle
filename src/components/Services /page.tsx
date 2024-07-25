import React from "react";
import Image from "next/image";
import Service1 from "@/assets/images/service1.jpg";
import Service2 from "@/assets/images/service2.jpg";
import Service3 from "@/assets/images/service3.jpg";
import Service4 from "@/assets/images/service4.jpg";

const ServicesPage = () => {
  return (
    <div className="bg-white px-8 md:px-32">
      <div className="flex flex-col justify-center items-center pt-24 pb-0 md:pt-40 m-auto ">
        <h4 className="text-gray-600">Services for All Age Women</h4>
        <h1 className="my-8 md:my-10 text-2xl md:text-5xl md:w-[700px] leading-tight block text-center text-gray-950">
          I Love to Help People Feel
          <span className="block md:mt-2 "> Great about How They Look.</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-16 md:gap-1 my-20">
      <div className="flex justify-center">
          <Image
            src={Service1}
            alt="Dicover Image"
            objectFit="cover"
            className="w-full h-auto md:w-[280px] md:h-[380px] rounded-sm transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={Service4}
            alt="Dicover Image"
            objectFit="cover"
            className="w-full h-auto md:w-[280px] md:h-[440px] rounded-sm transform transition-transform duration-300 hover:scale-105 -mt-8"
          />
        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <Image
            src={Service3}
            alt="Dicover Image"
            objectFit="cover"
            className="w-full h-auto md:w-[280px] md:h-[480px] rounded-sm transform transition-transform duration-300 hover:scale-105 -mt-14"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={Service2}
            alt="Dicover Image"
            objectFit="cover"
            className="w-full h-auto md:w-[280px] md:h-[400px] rounded-sm transform transition-transform duration-300 hover:scale-105 -mt-8"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-16 md:gap-4">
        <div className="flex-1 p-4 bg-gray-50 rounded-md shodow-lg">
          <div className="flex gap-4 items-center mb-4">
            <h1 className="text-[#e9cec0] text-4xl">01</h1>
            <h1 className="text-2xl">Wardrobe Styling</h1>
          </div>
          <p className="my-6 mx-12 text-gray-700">
            Our wardrobe styling service helps you discover and define your
            personal style. We curate outfits that complement your body type,
            personality, and lifestyle, ensuring you look and feel your best
            every day.
          </p>
        </div>
        <div className="flex-1 p-4 bg-gray-50 rounded-md shodow-lg">
          <div className="flex gap-4 items-center mb-4">
            <h1 className="text-[#e9cec0] text-4xl">02</h1>
            <h1 className="text-2xl">Closet Cleanse</h1>
          </div>
          <p className="my-6 mx-12 text-gray-700">
            Our closet cleanse service is designed to help you declutter and
            organize your wardrobe. We assist in evaluating your current pieces,
            identifying items to keep, donate, or discard, and provide tips on
            maintaining an organized closet.
          </p>
        </div>
        <div className="flex-1 p-4 bg-gray-50 rounded-md shodow-lg">
          <div className="flex gap-4 items-center mb-4">
            <h1 className="text-[#e9cec0] text-4xl">03</h1>
            <h1 className="text-2xl">Shopping Tour</h1>
          </div>
          <p className="my-6 mx-12 text-gray-700">
            Join our personalized shopping tour where we guide you through the
            best stores to find clothing and accessories that match your style
            and budget. Enjoy a stress-free shopping experience with expert
            advice and recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
