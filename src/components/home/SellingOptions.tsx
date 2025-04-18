
import React, { useState, useEffect, useRef } from "react";
import PropertyCard from "../ui/PropertyCard";
import ContactForm from "../ui/ContactForm";
import PhoneModal from "../ui/PhoneModal";
import { toast } from "sonner";

const SellingOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const applyParallax = (sectionRef: React.RefObject<HTMLDivElement>, imageRef: React.RefObject<HTMLImageElement>, factor = 0.1) => {
        if (imageRef.current && sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Check if the section is in the viewport
          if (rect.top < windowHeight && rect.bottom > 0) {
            const distance = Math.min(Math.max((scrollPosition - (rect.top + scrollPosition - windowHeight/2)) * factor, -40), 40);
            imageRef.current.style.transform = `translateY(${distance}px)`;
          }
        }
      };
      
      applyParallax(section1Ref, image1Ref);
      applyParallax(section2Ref, image2Ref, 0.08);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactSubmit = (data: {
    name: string;
    phone: string;
  }) => {
    console.log("Contact form submitted:", data);
    toast.success("Te contactaremos pronto para asistirte en la venta");
  };
  
  const handlePhoneSubmit = (phoneNumber: string) => {
    console.log("Número recibido para WhatsApp:", phoneNumber);
    setIsSubmitted(true);
    setTimeout(() => {
      toast.success("Te contactaremos pronto por WhatsApp");
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };
  
  return (
    <section className="w-full max-w-[1254px] mx-auto mt-12 md:mt-20 px-4 md:px-8 lg:px-12">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[588px] flex-col items-stretch justify-center rounded-2xl">
          <div className="text-[#23242A] text-xs font-semibold leading-6 tracking-[2px] uppercase self-center">
            Vende Rápido, Fácil y Seguro.
          </div>
          <div className="flex w-full flex-col items-center font-normal text-center justify-center mt-4">
            <h2 className="text-[#23242A] text-3xl md:text-[40px]">
              <span className="font-semibold">Vende</span> tu casa
            </h2>
            <p className="text-[#252129] text-base mt-2 px-2">
              Cuéntanos como es tu casa o departamento y nosotros nos encargamos
              del resto.
            </p>
          </div>
        </div>

        <div className="w-full mt-12 md:mt-20">
          {/* Option 1 */}
          <div 
            ref={section1Ref}
            className="flex flex-col md:flex-row min-h-[260px] w-full items-center gap-8 py-6 md:py-8 md:px-8 lg:px-12"
          >
            <div className="w-full md:w-[321px] max-w-[350px] overflow-hidden rounded-3xl">
              <img 
                ref={image1Ref}
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/1efb3e174aa6bae9b9bf5ff40bc9420808dabce0804ada24a914b4a76263858f?placeholderIfAbsent=true" 
                alt="Sell quickly" 
                className="aspect-[1.54] object-contain w-full rounded-3xl transition-transform duration-300" 
              />
            </div>
            
            <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[407px] px-4 md:px-6 text-center md:text-left">
              <div className="flex w-full flex-col justify-center">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="bg-[rgba(235,254,244,1)] flex items-center justify-center w-11 h-11 my-auto px-1.5 rounded-md">
                    <img src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/a53b3c43916fb4dbe0680ddc1084af061033e67bbcab381cf34fd9c04ec23b40?placeholderIfAbsent=true" alt="Fast icon" className="aspect-[1] object-contain w-8" />
                  </div>
                  <div className="flex flex-col items-center md:items-start font-semibold justify-center my-auto">
                    <div className="text-[#6D6970] text-base tracking-[2px] uppercase">
                      Rápido
                    </div>
                    <div className="text-[#252129] text-2xl leading-none">
                      1.- Compramos tu propiedad
                    </div>
                  </div>
                </div>
                <p className="text-[#6d6970] text-base font-normal leading-6 mt-6 px-2 md:px-0">
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
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="bg-[rgba(0,124,79,1)] flex min-h-12 items-center gap-2 text-base text-white font-medium text-center justify-center mx-auto md:mx-0 mt-6 px-6 py-3.5 rounded-[100px] transition-colors hover:bg-[rgba(0,124,79,0.9)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,124,79,0.3)]"
                >
                  <span className="self-stretch my-auto">
                    Hablar por WhatsApp
                  </span>
                  <img src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/55ed9cd5ee3d9f35e906c7dc3659f60f513feda3016b89bbe2d45c1d5a4dcff6?placeholderIfAbsent=true" alt="WhatsApp" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#E6E5E7] h-px w-full mt-10 md:mt-16" />

          {/* Option 2 */}
          <div 
            ref={section2Ref}
            className="flex flex-col md:flex-row w-full items-center gap-8 justify-between py-6 md:py-8 md:px-8 lg:px-12 mt-10 md:mt-16"
          >
            <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[486px] px-4 md:px-6 text-center md:text-left">
              <div className="flex w-full flex-col items-center md:items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="bg-[rgba(235,254,244,1)] flex items-center justify-center w-11 h-11 my-auto px-1.5 rounded-md">
                    <div className="flex min-h-8 w-8" />
                  </div>
                  <div className="flex flex-col items-center md:items-start font-semibold justify-center my-auto">
                    <div className="text-[#6D6970] text-base tracking-[2px] uppercase">
                      Seguro
                    </div>
                    <div className="text-[#252129] text-2xl leading-none">
                      2.- Un asesor la vende por ti
                    </div>
                  </div>
                </div>
                <p className="text-[#6D6970] text-base font-normal leading-6 mt-6 px-2 md:px-0">
                  <span className="font-semibold text-[#252129]">
                    Nuestro equipo de expertos inmobiliarios hará todo por ti
                  </span>
                  ; desde la promoción de la propiedad hasta la negociación y
                  cierre de la venta.
                </p>
              </div>

              <ContactForm onSubmit={handleContactSubmit} className="mt-8 w-full max-w-md mx-auto md:mx-0" />
            </div>

            <div className="relative flex items-start text-xs text-white font-bold leading-[23px] w-full md:w-[426px] max-w-[350px] md:max-w-full mt-8 md:mt-0 overflow-hidden rounded-lg">
              <img 
                ref={image2Ref}
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/30ad09e0a09622fe0d414b458c73748058e7b448670cace7b30746fa3c952521?placeholderIfAbsent=true" 
                alt="Broker network" 
                className="aspect-[1.6] object-contain w-full rounded-lg transition-transform duration-300" 
              />
              <div className="bg-[rgba(0,0,0,0.25)] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] absolute z-0 overflow-hidden -translate-x-2/4 px-6 py-1 rounded-[100px] left-2/4 bottom-5 whitespace-nowrap max-md:text-xs max-md:px-3">
                <span className="font-normal">Conoce la </span>
                <span className="text-white">red de brokers</span>
              </div>
            </div>
          </div>

          <div className="bg-[#E6E5E7] h-px w-full mt-10 md:mt-16" />

          {/* Option 3 */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between py-6 md:py-8 md:px-8 lg:px-12 mt-10 md:mt-16">
            <div className="flex items-center justify-center w-full md:w-auto mb-8 md:mb-0">
              <PropertyCard />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[487px] px-4 md:px-6 text-center md:text-left">
              <div className="flex w-full flex-col items-center md:items-start justify-center">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="bg-[rgba(235,254,244,1)] flex items-center justify-center w-11 h-11 my-auto px-1.5 rounded-md">
                    <img src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/dab45a9f5b4ea05859683451cc3f97f4ac1fc95e372ae70f86309b3d7daa8038?placeholderIfAbsent=true" alt="Easy icon" className="aspect-[1] object-contain w-8" />
                  </div>
                  <div className="flex flex-col items-center md:items-start font-semibold justify-center my-auto">
                    <div className="text-[#6D6970] text-base tracking-[2px] uppercase">
                      fácil
                    </div>
                    <div className="text-[#252129] text-2xl leading-none">
                      3.- Quiero vender mi casa
                    </div>
                  </div>
                </div>
                <p className="text-[#6d6970] text-base font-normal leading-6 mt-6 px-2 md:px-0">
                  Si prefieres gestionar la venta de tu propiedad, te ofrecemos
                  una{" "}
                  <span className="font-semibold text-[#0A0D12]">
                    plataforma confiable
                  </span>{" "}
                  donde miles de compradores buscan una propiedad todos los días
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-6 text-base text-white font-medium text-center mt-8">
                <button className="bg-[rgba(0,124,79,1)] min-h-12 px-6 py-[15px] rounded-[100px] transition-colors hover:bg-[rgba(0,124,79,0.9)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,124,79,0.3)]">
                  Publicar gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhoneModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handlePhoneSubmit} 
        title="Déjanos tu número para WhatsApp" 
        buttonText="Enviar"
        isSubmitted={isSubmitted}
      />
    </section>
  );
};

export default SellingOptions;
