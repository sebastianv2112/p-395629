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

      <main className="flex flex-col px-20 max-md:pl-5">
        <div className="bg-white flex w-full max-w-[1366px] flex-col overflow-hidden items-stretch max-md:max-w-full">
          <HeroSection />
          <ServiceCards />

          <SellingOptions />

          <SellingSteps />
        </div>

        <div className="flex flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <FaqSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
