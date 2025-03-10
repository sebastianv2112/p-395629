import React from "react";
import PropertyCard from "../ui/PropertyCard";

const SellingSteps = () => {
  return (
    <section className="w-full mt-20 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#23242A] text-[40px] font-normal max-md:max-w-full">
        <span className="font-normal">Así de </span>
        <span className="font-bold">fácil es vender</span>
        <span className="font-normal"> tu propiedad</span>
      </h2>

      <div className="flex w-full items-stretch gap-6 flex-wrap mt-10 max-md:max-w-full">
        {/* Step 1 */}
        <div className="bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.04)] border min-w-60 w-[600px] max-w-[600px] p-8 rounded-3xl border-[rgba(234,234,235,1)] border-solid max-md:max-w-full max-md:px-5">
          <div className="w-full max-md:max-w-full">
            <div className="text-[rgba(0,124,79,1)] text-xl font-semibold leading-[1.6] max-md:max-w-full">
              Paso 1
            </div>
            <div className="bg-[rgba(213,212,214,1)] flex min-h-1 w-full flex-col mt-2.5 rounded-[70px] max-md:max-w-full">
              <div className="bg-[rgba(10,191,118,1)] flex min-h-1 w-[218px] max-w-full rounded-[70px]" />
            </div>
          </div>

          <div className="relative flex w-full gap-[40px_54px] mt-8 max-md:max-w-full">
            <div className="z-0 min-w-60 text-[#0A0D12] flex-1 shrink basis-[0%]">
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

            <div className="z-0 flex h-[225px] flex-col justify-center w-[165px] rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/c2c24e3831224b8bfa2f5b2f90daaa136ae32fc0e1e0e7b68806139d401d24be?placeholderIfAbsent=true"
                alt="Property form"
                className="aspect-[0.96] object-contain w-[230px] max-w-full"
              />
            </div>

            <PropertyCard size="small" className="right-0 bottom-10" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.04)] border min-w-60 max-w-[600px] font-semibold flex-1 shrink basis-[0%] p-8 rounded-3xl border-[rgba(234,234,235,1)] border-solid max-md:px-5">
          <div className="w-full text-xl text-[rgba(37,43,55,1)] leading-[1.6]">
            <div>Paso 2</div>
            <div className="bg-[rgba(213,212,214,1)] flex min-h-1 w-full mt-2.5 rounded-[70px]" />
          </div>
          <div className="flex w-full gap-[40px_54px] text-2xl text-[#717680] leading-8 mt-8">
            <div className="w-full flex-1 shrink basis-[0%]">
              Analizamos tu propiedad
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-[0px_12px_32px_rgba(0,0,0,0.04)] border min-w-60 max-w-[600px] font-semibold flex-1 shrink basis-[0%] p-8 rounded-3xl border-[rgba(234,234,235,1)] border-solid max-md:px-5">
          <div className="w-full text-xl text-[rgba(37,43,55,1)] leading-[1.6]">
            <div>Paso 3</div>
            <div className="bg-[rgba(213,212,214,1)] flex min-h-1 w-full mt-2.5 rounded-[70px]" />
          </div>
          <div className="flex w-full gap-[40px_54px] text-2xl text-[#717680] leading-8 mt-8">
            <div className="w-full flex-1 shrink basis-[0%]">
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
