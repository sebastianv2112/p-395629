import React from "react";
import PropertyCard from "../ui/PropertyCard";
import ContactForm from "../ui/ContactForm";

const SellingOptions = () => {
  const handleContactSubmit = (data: { name: string; phone: string }) => {
    console.log("Contact form submitted:", data);
    // Here you would typically send this data to your backend
  };

  return (
    <section className="self-center w-full max-w-[1254px] mt-[71px] px-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full flex-col items-center justify-center max-md:max-w-full">
        <div className="flex w-[588px] max-w-full flex-col items-stretch justify-center rounded-2xl">
          <div className="text-[#23242A] text-xs font-semibold leading-6 tracking-[2px] uppercase self-center">
            Vende Rápido, Fácil y Seguro.
          </div>
          <div className="flex w-full flex-col items-center font-normal text-center justify-center mt-4 max-md:max-w-full">
            <h2 className="text-[#23242A] text-[40px]">
              <span className="font-semibold">Vende</span> tu casa
            </h2>
            <p className="text-[#252129] text-base mt-2 max-md:max-w-full">
              Cuéntanos como es tu casa o departamento y nosotros nos encargamos
              del resto.
            </p>
          </div>
        </div>

        <div className="w-[1040px] max-w-full mt-[120px] max-md:mt-10">
          {/* Option 1 */}
          <div className="flex min-h-[260px] w-full items-center gap-[40px_56px] flex-wrap px-12 max-md:max-w-full max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/1efb3e174aa6bae9b9bf5ff40bc9420808dabce0804ada24a914b4a76263858f?placeholderIfAbsent=true"
              alt="Sell quickly"
              className="aspect-[1.54] object-contain w-[321px] self-stretch min-w-60 min-h-[260px] grow shrink my-auto rounded-3xl"
            />
            <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center grow shrink w-[407px] my-auto px-6 max-md:max-w-full max-md:px-5">
              <div className="flex w-full flex-col justify-center max-md:max-w-full">
                <div className="flex items-center gap-6">
                  <div className="bg-[rgba(235,254,244,1)] self-stretch flex items-center justify-center w-11 h-11 my-auto px-1.5 rounded-md">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/a53b3c43916fb4dbe0680ddc1084af061033e67bbcab381cf34fd9c04ec23b40?placeholderIfAbsent=true"
                      alt="Fast icon"
                      className="aspect-[1] object-contain w-8"
                    />
                  </div>
                  <div className="self-stretch flex min-w-60 flex-col items-stretch font-semibold justify-center my-auto">
                    <div className="text-[#6D6970] text-base tracking-[2px] uppercase">
                      Rápido
                    </div>
                    <div className="text-[#252129] text-center text-2xl leading-none">
                      1.- Compramos tu propiedad
                    </div>
                  </div>
                </div>
                <p className="self-stretch text-[#6d6970] text-base font-normal leading-6 mt-6 max-md:max-w-full">
                  Si necesitas{" "}
                  <span className="font-semibold text-[#252129]">
                    vender rápido
                  </span>
                  , te hacemos una oferta justa, te{" "}
                  <span className="font-semibold text-[#252129]">
                    pagamos de contado
                  </span>{" "}
                  y con nuestros aliados, garantizamos una compra segura, sin
                  trámites ni esperas.
                </p>
                <button className="bg-[rgba(0,124,79,1)] flex min-h-12 items-center gap-2 text-base text-white font-medium text-center justify-center mt-6 px-6 py-3.5 rounded-[100px] max-md:px-5">
                  <span className="self-stretch my-auto">
                    Hablar por WhatsApp
                  </span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/55ed9cd5ee3d9f35e906c7dc3659f60f513feda3016b89bbe2d45c1d5a4dcff6?placeholderIfAbsent=true"
                    alt="WhatsApp"
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#E6E5E7] flex min-h-px w-full mt-16 max-md:max-w-full max-md:mt-10" />

          {/* Option 2 */}
          <div className="flex w-full items-center gap-8 justify-between flex-wrap mt-16 px-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[486px] my-auto px-6 max-md:max-w-full max-md:px-5">
              <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
                <div className="flex items-center gap-6">
                  <div className="bg-[rgba(235,254,244,1)] self-stretch flex items-center justify-center w-11 h-11 my-auto px-1.5 rounded-md">
                    <div className="flex min-h-8 w-8" />
                  </div>
                  <div className="self-stretch flex min-w-60 flex-col items-stretch font-semibold justify-center my-auto">
                    <div className="text-[#6D6970] text-base tracking-[2px] uppercase">
                      Seguro
                    </div>
                    <div className="text-[#252129] text-center text-2xl leading-none">
                      2.- Un asesor la vende por ti
                    </div>
                  </div>
                </div>
                <p className="text-[#6D6970] text-base font-normal leading-6 mt-6 max-md:max-w-full">
                  <span className="font-semibold text-[#252129]">
                    Nuestro equipo de expertos inmobiliarios hará todo por ti
                  </span>
                  ; desde la promoción de la propiedad hasta la negociación y
                  cierra de la venta.
                </p>
              </div>

              <ContactForm onSubmit={handleContactSubmit} className="mt-8" />
            </div>

            <div className="self-stretch relative flex min-w-60 items-start text-xs text-white font-bold leading-[23px] w-[426px] my-auto max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/30ad09e0a09622fe0d414b458c73748058e7b448670cace7b30746fa3c952521?placeholderIfAbsent=true"
                alt="Broker network"
                className="aspect-[1.6] object-contain w-[426px] z-0 min-w-60 my-auto max-md:max-w-full"
              />
              <div className="bg-[rgba(0,0,0,0.25)] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] absolute z-0 overflow-hidden -translate-x-2/4 translate-y-[0%] px-6 py-1 rounded-[100px] left-2/4 bottom-5 max-md:px-5">
                <span className="font-normal">Conoce la </span>
                <span className="text-white">red de brokers</span>
              </div>
            </div>
          </div>

          <div className="bg-[#E6E5E7] flex min-h-px w-full mt-16 max-md:max-w-full max-md:mt-10" />

          {/* Option 3 */}
          <div className="flex w-full items-center justify-between flex-wrap mt-16 px-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="self-stretch flex min-w-60 items-center gap-2.5 justify-center flex-1 shrink basis-12 my-auto max-md:max-w-full">
              <PropertyCard />
            </div>

            <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[487px] my-auto px-6 max-md:max-w-full max-md:px-5">
              <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
                <div className="flex items-center gap-6">
                  <div className="bg-[rgba(235,254,244,1)] self-stretch flex items-center justify-center w-11 h-11 my-auto px-1.5 rounded-md">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/dab45a9f5b4ea05859683451cc3f97f4ac1fc95e372ae70f86309b3d7daa8038?placeholderIfAbsent=true"
                      alt="Easy icon"
                      className="aspect-[1] object-contain w-8"
                    />
                  </div>
                  <div className="self-stretch flex min-w-60 flex-col items-stretch font-semibold justify-center my-auto">
                    <div className="text-[#6D6970] text-base tracking-[2px] uppercase">
                      fácil
                    </div>
                    <div className="text-[#252129] text-center text-2xl leading-none">
                      3.- Quiero vender mi casa
                    </div>
                  </div>
                </div>
                <p className="text-[#6d6970] text-base font-normal leading-6 mt-6 max-md:max-w-full">
                  Si prefieres gestionar la venta de tu propiedad, te ofrecemos
                  una{" "}
                  <span className="font-semibold text-[#0A0D12]">
                    plataforma confiable
                  </span>{" "}
                  donde miles de compradores buscan una propiedad todos los días
                </p>
              </div>
              <div className="flex items-center gap-6 text-base text-white font-medium text-center mt-8">
                <button className="self-stretch bg-[rgba(0,124,79,1)] min-h-12 gap-2 my-auto px-6 py-[15px] rounded-[100px] max-md:px-5">
                  Publicar gratis
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#EDF7F8] flex min-h-px w-full mt-16 max-md:max-w-full max-md:mt-10" />
        </div>
      </div>
    </section>
  );
};

export default SellingOptions;
