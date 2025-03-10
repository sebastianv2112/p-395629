import React from "react";
import { Link } from "react-router-dom";

const ServiceCards = () => {
  return (
    <section className="self-center z-10 flex mt-[-75px] w-[1040px] max-w-full gap-10 justify-center flex-wrap">
      <div className="border border-[color:var(--Behavior-Neutral-Colors-scarpaGray-100,#E6E5E7)] bg-white min-w-60 overflow-hidden flex-1 shrink basis-[0%] rounded-2xl border-solid">
        <div className="bg-[rgba(235,254,244,1)] w-full font-semibold px-6 py-4 max-md:px-5">
          <div className="text-[rgba(17,80,76,1)] text-[10px] leading-6 tracking-[1px] uppercase">
            vender una casa rápido
          </div>
          <div className="text-[rgba(1,45,32,1)] text-[28px]">
            Compramos tu casa <span className="font-normal">en solo 1 mes</span>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch text-base justify-center px-6 py-4 max-md:px-5">
          <div className="text-[#252129] font-normal leading-6">
            Si necesitas vender rápido, te hacemos{" "}
            <span className="font-semibold">una oferta justa</span> y te pagamos
            en tiempo récord.
          </div>
          <Link
            to="#"
            className="border flex items-center gap-2 text-[rgba(0,128,89,1)] font-medium text-center justify-center mt-4 px-6 py-2 rounded-[100px] border-[rgba(0,128,89,1)] border-solid max-md:px-5"
          >
            <span className="self-stretch my-auto">Vender mi casa</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/23280721c05c65f54658f2dce2322f9284597379073f0fa55132418282e8b1b6?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </Link>
        </div>
      </div>

      <div className="border border-[color:var(--Behavior-Neutral-Colors-scarpaGray-100,#E6E5E7)] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.08)] bg-white min-w-60 overflow-hidden flex-1 shrink basis-[0%] rounded-2xl border-solid">
        <div className="bg-[rgba(235,254,244,1)] w-full px-6 py-4 max-md:px-5">
          <div className="text-[rgba(17,80,76,1)] text-[10px] font-semibold leading-6 tracking-[1px] uppercase">
            Te ayudamos a vender tu casa
          </div>
          <div className="text-[rgba(1,45,32,1)] text-[28px] font-normal">
            Un broker puede
            <br />
            <span className="font-semibold text-[rgba(1,45,32,1)]">
              venderla por ti
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch text-base font-normal justify-center px-6 py-4 max-md:px-5">
          <div className="text-[#252129] leading-6">
            Si prefieres no lidiar con el proceso, nuestros expertos te ayudan a{" "}
            <span className="font-semibold">encontrar el mejor comprador</span>.
          </div>
          <Link
            to="#"
            className="bg-[rgba(0,128,89,1)] flex items-center gap-2 text-white text-center leading-none justify-center mt-4 px-4 py-2 rounded-[100px]"
          >
            <span className="self-stretch my-auto">Solicitar asistencia</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/b84b83634960f8e6be2f08c6f6db9eb614053b638c6c295e651141c9cb8b8b8c?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </Link>
        </div>
      </div>

      <div className="border border-[color:var(--Behavior-Neutral-Colors-scarpaGray-100,#E6E5E7)] bg-white min-w-60 overflow-hidden flex-1 shrink basis-[0%] rounded-2xl border-solid">
        <div className="bg-[rgba(235,254,244,1)] w-full px-6 py-4 max-md:px-5">
          <div className="text-[rgba(17,80,76,1)] text-[10px] font-semibold leading-6 tracking-[1px] uppercase">
            vender en trato directo
          </div>
          <div className="text-[rgba(1,45,32,1)] text-[28px] font-normal">
            <span className="font-semibold text-[rgba(1,45,32,1)]">
              Anuncia gratis
            </span>
            <br />
            en todo méxico
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch text-base justify-center px-6 py-4 max-md:px-5">
          <div className="text-[#252129] font-normal leading-6">
            Publica tu propiedad en nuestro sitio
            <br />y{" "}
            <span className="font-semibold">recibe ofertas directas</span> de
            compradores interesados.
          </div>
          <Link
            to="#"
            className="border flex items-center gap-2 text-[rgba(0,124,79,1)] font-medium text-center justify-center mt-4 px-6 py-2 rounded-[100px] border-[rgba(0,128,89,1)] border-solid max-md:px-5"
          >
            <span className="self-stretch my-auto">Publicar gratis</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/11f26079444d5b63a3afced95fd2cbc7f99b82960ae4fd35f380250d4e528605?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
