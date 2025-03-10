import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-8 max-md:max-w-full">
      <div
        className="flex min-h-[340px] w-[1254px] max-w-full flex-col overflow-hidden items-center pt-8 px-16 rounded-[48px] max-md:px-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,128,89,0.9), rgba(0,128,89,0.9))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[800px] max-w-full">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="self-center flex flex-col items-center text-[56px] max-md:max-w-full max-md:text-[40px]">
              <h1 className="font-bold max-md:text-[40px]">Compramos</h1>
              <h1 className="text-white font-semibold max-md:max-w-full max-md:text-[40px]">
                {" "}
                tu casa y departamento
              </h1>
            </div>
            <h2 className="text-white text-[32px] font-normal mt-4 max-md:max-w-full">
              o te ayudamos a venderla
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
