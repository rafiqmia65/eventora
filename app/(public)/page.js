import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonial";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <CTA></CTA>
    </div>
  );
};

export default HomePage;
