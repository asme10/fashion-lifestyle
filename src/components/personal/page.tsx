import React from "react";
import Image from "next/image";
import CardImg1 from "@/assets/images/card-img1.avif";
import CardImg2 from "@/assets/images/card-img2.avif";
import CardImg3 from "@/assets/images/card-img3.jpeg";

const PersonalPage: React.FC = () => {
  return (
    <div className="bg-[#ffffff] py-16 px-6 md:py-32 md:px-32">
      <h1 className="text-3xl md:text-5xl mb-8 md:mb-14 font-montserrat text-center">
        Personal Style Stories
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
        <div className="w-full md:w-[380px] h-[500px] rounded-md shadow-sm border border-[#f6f6f6] bg-[#f6f6f6] transition-transform transform hover:scale-105 hover:shadow-md">
          <Image
            src={CardImg1}
            alt="Street Shopping Tips"
            objectFit="cover"
            className="w-full h-[230px] rounded-t-md"
          />
          <div className="flex flex-col mx-4 text-black py-4">
            <h3 className="text-xl md:text-2xl pb-2 font-serif">
              Street Shopping Tips
            </h3>
            <p className="text-sm md:text-md pb-2">March 14, 2019</p>
            <p className="text-sm md:text-md pb-2 italic">
              Comments: It is nice, I like it
            </p>
            <p className="text-sm md:text-md pb-2 font-light">
              "Discover the best street shopping spots and tips for finding
              unique and affordable items. Enhance your shopping experience with
              practical advice and insider secrets."
            </p>
          </div>
        </div>
        <div className="w-full md:w-[380px] h-[500px] rounded-md shadow-sm border border-[#f6f6f6] bg-[#f6f6f6] transition-transform transform hover:scale-105 hover:shadow-md">
          <Image
            src={CardImg2}
            alt="Top Travel Destinations"
            objectFit="cover"
            className="w-full h-[230px] rounded-t-md"
          />
          <div className="flex flex-col mx-4 text-black py-4">
            <h3 className="text-xl md:text-2xl pb-2 font-serif">
              Top Travel Destinations
            </h3>
            <p className="text-sm md:text-md pb-2">April 2, 2020</p>
            <p className="text-sm md:text-md pb-2 italic">No Comments</p>
            <p className="text-sm md:text-md pb-2 font-light">
              "Explore the best places to visit around the world. Start planning
              your next adventure today and create unforgettable memories."
            </p>
          </div>
        </div>
        <div className="w-full md:w-[380px] h-[500px] rounded-md shadow-sm border border-[#f6f6f6] bg-[#f6f6f6] transition-transform transform hover:scale-105 hover:shadow-md">
          <Image
            src={CardImg3}
            alt="Fashion Trends"
            objectFit="cover"
            className="w-full h-[230px] rounded-t-md"
          />
          <div className="flex flex-col mx-4 text-black py-4">
            <h3 className="text-xl md:text-2xl pb-2 font-serif">
              Fashion Trends
            </h3>
            <p className="text-sm md:text-md pb-2">May 10, 2021</p>
            <p className="text-sm md:text-md pb-2 italic">
              Comments: Loving the styles!
            </p>
            <p className="text-sm md:text-md pb-2 font-light">
              "Stay updated with the latest fashion trends and styles. Find out
              what's in vogue and how to incorporate new trends into your
              wardrobe."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#373f42] border-none w-[140px] py-2 px-6 mx-auto text-gray-50 hover:text-opacity-65 cursor-pointer text-center mt-16">
        Read More
      </div>
    </div>
  );
};

export default PersonalPage;
