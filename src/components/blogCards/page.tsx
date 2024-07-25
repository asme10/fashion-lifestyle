import React from "react";
import Image, { StaticImageData } from "next/image";
import CardImg1 from "@/assets/images/card-img1.avif";
import CardImg2 from "@/assets/images/card-img2.avif";

import CardPage from "../card/page";

interface CardData {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  date: string;
  comment?: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imageSrc: CardImg1,
    title: "Street Shopping Tips",
    date: "March 14, 2019",
    comment: "It is nice, I like it",
    description:
      "Nullam imperdiet lobortis maximus cras ante neque. Aenean fermentum vulputate eros, efficitur…",
  },
  {
    id: 2,
    imageSrc: CardImg2,
    title: "Top Travel Destinations",
    date: "April 2, 2020",
    description:
      "Explore the best places to visit around the world. Start planning your next adventure today…",
  },
];

const BlogCardsPage: React.FC = () => {
  return (
    <div className="bg-[#fcf5f2] w-full m-h-screen flex flex-col md:flex-row flex-wrap gap-8 pt-52 pb-20 md:pb-24 justify-center">
      {cardData.map((card) => (
        <CardPage
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          date={card.date}
          comment={card.comment}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default BlogCardsPage;
