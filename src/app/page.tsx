import React from "react";
import Homepage from "@/app/home/page";
import DiscoverPage from "@/components/discover/page";
import ServicesPage from "@/components/Services /page";
import TestimonialsPage from "@/components/testimonials/page";
import ConsultationsPage from "@/components/consultations/page";

const Page = () => {
  return (
    <>
      <Homepage />
      <DiscoverPage />
      <ServicesPage />
      <TestimonialsPage />
      <ConsultationsPage />
    </>
  );
};

export default Page;
