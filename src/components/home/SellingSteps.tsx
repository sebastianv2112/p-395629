
import React, { useEffect, useRef } from "react";
import PropertyCard from "../ui/PropertyCard";

const SellingSteps = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (image1Ref.current && section1Ref.current) {
        const rect = section1Ref.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Check if the section is in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const distance = Math.min(Math.max((scrollPosition - (rect.top + scrollPosition - windowHeight/2)) * 0.1, -30), 30);
          image1Ref.current.style.transform = `translateY(${distance}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-16 md:mt-24 px-4 md:px-8">
      <h2 className="text-[#23242A] text-3xl md:text-[40px] font-normal text-center md:text-left max-w-full">
        <span className="font-normal">Así de </span>
        <span className="font-bold">fácil es vender</span>
        <span className="font-normal"> tu propiedad</span>
      </h2>

      <div className="flex w-full items-stretch gap-5 md:gap-6 flex-wrap justify-center mt-8 md:mt-10">
        {/* Step 1 */}
        <div 
          ref={section1Ref} 
          className="bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.04)] border w-full md:w-[600px] p-5 md:p-8 rounded-3xl border-[rgba(234,234,235,1)] transition-shadow hover:shadow-lg"
        >
          <div className="w-full">
            <div className="text-[rgba(0,124,79,1)] text-xl font-semibold leading-[1.6]">
              Paso 1
            </div>
            <div className="bg-[rgba(213,212,214,1)] flex min-h-1 w-full flex-col mt-2.5 rounded-[70px]">
              <div className="bg-[rgba(10,191,118,1)] flex min-h-1 w-[33%] max-w-full rounded-[70px]" />
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row w-full gap-5 md:gap-[40px] mt-6 md:mt-8 items-center md:items-start">
            <div className="z-0 w-full md:w-auto md:flex-1 text-[#0A0D12] text-center md:text-left">
              <h3 className="text-2xl font-semibold leading-8">
                Cuéntanos sobre tu propiedad
              </h3>
              <p className="text-base font-normal leading-6 mt-4">
                Déjanos los datos básicos como:
                <br />
                <br />
                Ubicación
                <br />
                Características
                <br />
                Precio
              </p>
            </div>

            <div className="z-0 overflow-hidden h-[225px] flex justify-center w-full md:w-[165px]">
              <img
                ref={image1Ref}
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/c2c24e3831224b8bfa2f5b2f90daaa136ae32fc0e1e0e7b68806139d401d24be?placeholderIfAbsent=true"
                alt="Property form"
                className="aspect-[0.96] object-contain w-[230px] max-w-full transition-transform duration-300"
              />
            </div>

            <div className="absolute right-0 bottom-0 md:bottom-10 hidden md:block">
              <PropertyCard size="small" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.04)] border w-full md:w-[calc(50%-12px)] p-5 md:p-8 rounded-3xl border-[rgba(234,234,235,1)] transition-shadow hover:shadow-lg">
          <div className="w-full">
            <div className="text-xl font-semibold text-[rgba(37,43,55,1)] leading-[1.6]">Paso 2</div>
            <div className="bg-[rgba(213,212,214,1)] flex min-h-1 w-full mt-2.5 rounded-[70px]">
              <div className="bg-[rgba(10,191,118,1)] flex min-h-1 w-[66%] max-w-full rounded-[70px]" />
            </div>
          </div>
          <div className="flex w-full gap-[40px_54px] mt-8">
            <div className="w-full text-2xl font-semibold text-[#717680] leading-8">
              Analizamos tu propiedad
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.04)] border w-full md:w-[calc(50%-12px)] p-5 md:p-8 rounded-3xl border-[rgba(234,234,235,1)] transition-shadow hover:shadow-lg">
          <div className="w-full">
            <div className="text-xl font-semibold text-[rgba(37,43,55,1)] leading-[1.6]">Paso 3</div>
            <div className="bg-[rgba(213,212,214,1)] flex min-h-1 w-full mt-2.5 rounded-[70px]">
              <div className="bg-[rgba(10,191,118,1)] flex min-h-1 w-full max-w-full rounded-[70px]" />
            </div>
          </div>
          <div className="flex w-full gap-[40px_54px] mt-8">
            <div className="w-full text-2xl font-semibold text-[#717680] leading-8">
              Recibe ofertas
              <br />y vende tu propiedad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingSteps;
