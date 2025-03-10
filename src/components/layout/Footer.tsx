import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[rgba(241,248,245,1)] flex w-full flex-col items-stretch pt-14 px-14 max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-6 text-base text-[#252129] font-normal flex-wrap max-md:max-w-full">
        <div className="min-w-60 tracking-[-0.2px] leading-6 w-[402px]">
          <div className="w-full pr-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/0ce3e2ac997037a701a52020c4a2d11d3818a49d053fabc91dd4c0001570d0af?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[7.63] object-contain w-[213px] max-w-full"
            />
            <p className="mt-4">
              Somos la comunidad inmobiliaria más grande de México que conecta
              de forma gratuita a quienes ofrecen y buscan cualquier tipo de
              propiedad.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#008059] whitespace-nowrap text-center w-[189px]">
          <h3 className="text-[#252129] font-bold">Empresa</h3>
          <Link
            to="#"
            className="underline decoration-solid decoration-auto underline-offset-auto underline mt-6"
          >
            Acerca
          </Link>
          <Link
            to="#"
            className="underline decoration-solid decoration-auto underline-offset-auto underline mt-6"
          >
            Prensa
          </Link>
        </div>
        <div className="flex min-w-60 flex-col text-[#008059] whitespace-nowrap text-center w-[296px]">
          <h3 className="text-[#252129] font-bold pr-[31px] pb-0.5 max-md:pr-5">
            Servicios
          </h3>
          <Link
            to="#"
            className="underline decoration-solid decoration-auto underline-offset-auto underline mt-6"
          >
            Publicar
          </Link>
          <Link
            to="#"
            className="underline decoration-solid decoration-auto underline-offset-auto underline mt-6"
          >
            Avalúo
          </Link>
          <Link
            to="#"
            className="underline decoration-solid decoration-auto underline-offset-auto underline mt-6"
          >
            Micrositio
          </Link>
        </div>
        <div className="flex min-w-60 flex-col font-bold justify-center flex-1 shrink basis-[0%]">
          <div className="flex flex-col items-stretch justify-center">
            <h3 className="whitespace-nowrap text-center pb-2">Contacto</h3>
            <p className="font-normal mt-4">
              Lunes a viernes de 9:00 a.m. a 6:00 p.m.
            </p>
            <a
              href="mailto:contacto@propiedades.com"
              className="text-[#008059] underline decoration-solid decoration-auto underline-offset-auto underline mt-4"
            >
              contacto@propiedades.com
            </a>
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1253px] items-center gap-[40px_100px] justify-between flex-wrap mt-12 py-8 border-[rgba(0,0,0,0.1)] border-t max-md:max-w-full max-md:mt-10">
        <div className="self-stretch flex min-w-60 items-center gap-6 text-sm text-center flex-wrap my-auto max-md:max-w-full">
          <div className="text-[#252129] font-normal leading-none self-stretch w-[508px] my-auto max-md:max-w-full">
            Todos los derechos reservados Propiedades.com 2022 Powered by Habi
            🇲🇽 🇨🇴
          </div>
          <div className="self-stretch flex min-w-60 gap-2 my-auto">
            <div className="flex min-w-60 gap-2 text-[#008059] font-medium leading-none">
              <Link
                to="#"
                className="underline decoration-solid decoration-auto underline-offset-auto underline"
              >
                Términos y condiciones
              </Link>
              <div className="text-[#D3D3D4] font-normal">|</div>
              <Link
                to="#"
                className="underline decoration-solid decoration-auto underline-offset-auto underline"
              >
                Aviso de Privacidad
              </Link>
            </div>
            <div className="flex gap-2">
              <div className="text-[#D3D3D4] font-normal">|</div>
              <Link
                to="#"
                className="text-[#008059] font-medium leading-none underline decoration-solid decoration-auto underline-offset-auto underline"
              >
                Mapa de sitio
              </Link>
            </div>
          </div>
        </div>
        <div className="self-stretch flex gap-6 my-auto">
          <a href="#" aria-label="Facebook">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/85cc119bdde279d37ce30dd9e59f36cc9f07218556b8e2b279c3cb517b1f8b1a?placeholderIfAbsent=true"
              alt="Facebook"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/a90b034089da638a62ef737aafbcb03e9926222f4ab543da680da048a15a1aa6?placeholderIfAbsent=true"
              alt="Twitter"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/6f750c9b004ef173cdfb46bdf793af3b766040b22f6d3a3bc729c07f91d6bcdb?placeholderIfAbsent=true"
              alt="Instagram"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
