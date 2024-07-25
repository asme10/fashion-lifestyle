import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardPageProps {
  imageSrc: StaticImageData;
  title: string;
  date: string;
  comment?: string;
  description: string;
}

const CardPage: React.FC<CardPageProps> = ({
  imageSrc,
  title,
  date,
  comment,
  description,
}) => {
  return (
    <div className="w-[360px] h-[560px] mx-auto md:mx-0 md:w-[560px] md:h-[600px] rounded-md shadow-md border-[#ffffff] border bg-[#ffffff] transition-transform hover:scale-105 hover:shadow-sm">
      <Image
        src={imageSrc}
        alt="Blog Card Image"
        objectFit="cover"
        layout="full"
        className=" h-[240px] md:h-[320px] rounded-t-md"
      />
      <div className="flex flex-col mx-10 text-black py-8">
        <h3 className="text-2xl pb-4">{title}</h3>
        <p className="text-md pb-3">{date}</p>
        {comment ? (
          <p className="text-md pb-3 italic">Comments: {comment}</p>
        ) : (
          <p className="text-md pb-3 italic">No Comments</p>
        )}
        <p className="text-md pb-3">{description}</p>
      </div>
    </div>
  );
};

export default CardPage;
