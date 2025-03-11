
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-8 w-full px-4 md:px-0 max-md:max-w-full">
      <div
        className="flex min-h-[340px] w-full max-w-[1254px] flex-col overflow-hidden items-center pt-8 px-6 md:px-16 rounded-[48px] max-md:rounded-[32px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,128,89,0.9), rgba(0,128,89,0.9))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[800px]">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="self-center flex flex-col items-center text-4xl md:text-[56px] max-md:max-w-full">
              <h1 className="font-bold max-md:text-4xl">Compramos</h1>
              <h1 className="text-white font-semibold max-md:max-w-full max-md:text-4xl">
                {" "}
                tu casa y departamento
              </h1>
            </div>
            <h2 className="text-white text-xl md:text-[32px] font-normal mt-4 max-md:max-w-full">
              o te ayudamos a venderla
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
