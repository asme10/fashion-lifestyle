import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-gray-50">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm md:text-md max-w-[220px] md:max-w-lg text-center md:text-left">
          &copy; 2024 Fashion Lifestyle Blog. All rights reserved.
        </p>
        <p className="text-sm md:text-md">
          Created by
          <Link
            href="https://www.linkedin.com/in/asme-mussie/"
            className="font-semibold pl-3 hover:underline"
          >
            Asme Mussie
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
