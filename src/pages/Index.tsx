
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceCards from "@/components/home/ServiceCards";
import SellingOptions from "@/components/home/SellingOptions";
import SellingSteps from "@/components/home/SellingSteps";
import FaqSection from "@/components/home/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex flex-col">
        <div className="px-4 md:px-8 lg:px-20 max-md:pl-4 bg-white flex w-full flex-col overflow-hidden items-stretch">
          <HeroSection />
          <ServiceCards />
          <SellingOptions />
          <SellingSteps />
        </div>

        <div className="flex flex-col items-stretch mt-20 w-full max-md:mt-10">
          <FaqSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
