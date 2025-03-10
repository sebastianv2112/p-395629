import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FaqSection = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question: "¿Cómo vender una casa?",
      answer:
        "Puedes vender tu propiedad de tres maneras; Si tu propiedad cumple los requisitos puedes recibir una oferta directa en tiempo récord, podemos brindarte el servicio de un broker que venderá tu propiedad por ti ó si quieres vender tu casa directamente, puedes publicar tu inmueble (link a publicar) en nuestro portal con miles de interesados diarios.",
      isOpen: true,
    },
    {
      question:
        "¿Si quiero vender mi casa, cuánto tiempo tardan en hacerme una oferta?",
      answer:
        "Si tu propiedad califica, podemos hacerte una oferta en pocos días y completar el pago en un mes",
      isOpen: false,
    },
    {
      question: "¿Cuánto cuesta publicar mi propiedad?",
      answer:
        "Publicar tu inmueble en Propiedades.com es totalmente gratis, accede a miles de interesados y vende tu inmueble en el portal inmobiliario mas grande de México",
      isOpen: false,
    },
    {
      question: "¿Cómo vender mi casa con un profesional inmobiliario?",
      answer:
        "Tenemos a tu disposición los mejores brokers que se encargaran de todo el proceso de venta bajo una comisión al cierre del trato",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      }),
    );
  };

  return (
    <section className="justify-center items-center bg-neutral-50 self-center flex w-[1254px] max-w-full flex-col py-16 rounded-2xl">
      <div className="w-full px-[106px] max-md:px-5">
        <div className="flex w-full flex-col items-stretch text-center max-md:max-w-full">
          <h2 className="text-[#252129] text-[32px] font-semibold leading-none self-center max-md:max-w-full">
            Preguntas frecuentes sobre la venta de tu propiedad
          </h2>
          <p className="text-[#6D6970] text-base font-normal leading-6 mt-[21px] max-md:max-w-full">
            Encuentra respuestas a todas tus dudas y conviértete en un experto
            en la venta de inmuebles,
            <br />
            ya sea que busques vender rápido, recibir asesoría o encontrar el
            mejor comprador.
          </p>
        </div>

        <div className="w-full text-base mt-12 max-md:max-w-full max-md:mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full text-[#252129] mt-6 max-md:max-w-full"
            >
              <div className="flex w-full gap-4 justify-center flex-wrap px-4 max-md:max-w-full">
                <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                  <h3 className="font-semibold max-md:max-w-full">
                    {faq.question}
                  </h3>
                  {faq.isOpen && (
                    <p className="font-normal leading-6 mt-4 max-md:max-w-full">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => toggleFaq(index)}
                  aria-label={faq.isOpen ? "Collapse answer" : "Expand answer"}
                >
                  <img
                    src={
                      faq.isOpen
                        ? "https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/7d3d45c951f18977b99b1637b262820b374f25c4fbf9343436933d8e2a447f25?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/228e9f7bf71e6e8ef37a7cd823d8683f13e9c48826108db20930321a00d394aa?placeholderIfAbsent=true"
                    }
                    alt={faq.isOpen ? "Collapse" : "Expand"}
                    className="aspect-[1] object-contain w-4 shrink-0"
                  />
                </button>
              </div>
              <div className="bg-[#D3D2D4] flex min-h-px w-full mt-6 max-md:max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
