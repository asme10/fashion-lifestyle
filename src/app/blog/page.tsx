import BlogCardsPage from "@/components/blogCards/page";
import BlogHeroPage from "@/components/blogHero/page";
import ConsultationsPage from "@/components/consultations/page";
import PersonalPage from "@/components/personal/page";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <BlogHeroPage />
      <BlogCardsPage />
      <PersonalPage />
      <ConsultationsPage />
    </>
  );
};

export default BlogPage;
