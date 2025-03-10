import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      <div className="border-b-[color:var(--Behavior-Neutral-Colors-scarpaGray-50,#F3F3F3)] w-full border-b border-solid">
        <div className="items-center bg-[#F1F8F5] flex w-full gap-8 text-[10px] text-[#006647] font-semibold text-center underline uppercase tracking-[2px] leading-6 flex-wrap px-14 py-0.5 max-md:max-w-full max-md:px-5">
          <div className="self-stretch flex min-w-60 items-center gap-5 whitespace-nowrap flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            <Link
              to="#"
              className="underline decoration-solid decoration-auto underline-offset-auto self-stretch gap-2.5 my-auto"
            >
              Publicar
            </Link>
            <Link
              to="#"
              className="underline decoration-solid decoration-auto underline-offset-auto self-stretch gap-2.5 my-auto"
            >
              DESTACAR
            </Link>
            <Link
              to="#"
              className="underline decoration-solid decoration-auto underline-offset-auto self-stretch gap-2.5 my-auto"
            >
              MICROSITIOS
            </Link>
          </div>
          <Link
            to="#"
            className="underline decoration-solid decoration-auto underline-offset-auto self-stretch gap-2.5 my-auto"
          >
            PANEL DE ANUNCIANTE
          </Link>
        </div>
        <div className="items-center bg-white flex w-full gap-6 flex-wrap px-14 py-3 max-md:max-w-full max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/83e9cb6bb2d802560d18290180b4d033097a2402ed4479f920e83b526fbd8862?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[7.14] object-contain w-[172px] self-stretch shrink-0 my-auto"
          />
          <nav className="self-stretch flex min-w-60 items-center text-base text-[#252129] font-normal text-center flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            <Link
              to="#"
              className="bg-white self-stretch flex items-center gap-2 whitespace-nowrap justify-center my-auto p-4 rounded-lg"
            >
              <span className="self-stretch my-auto">Comprar</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/fb99683c287ddcef83fd8c185041bf548e93661428b9167a829acd051c07b50e?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
            </Link>
            <Link
              to="#"
              className="bg-white self-stretch flex items-center gap-2 whitespace-nowrap justify-center my-auto p-4 rounded-lg"
            >
              <span className="self-stretch my-auto">Rentar</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/fb99683c287ddcef83fd8c185041bf548e93661428b9167a829acd051c07b50e?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
            </Link>
            <Link
              to="#"
              className="self-stretch bg-white gap-2 whitespace-nowrap my-auto p-4 rounded-lg"
            >
              Vender
            </Link>
            <Link
              to="#"
              className="self-stretch bg-white gap-2 my-auto p-4 rounded-lg"
            >
              Avalúo gratis
            </Link>
            <Link
              to="#"
              className="self-stretch bg-white gap-2 my-auto p-4 rounded-lg"
            >
              Análisis de precios
            </Link>
            <Link
              to="#"
              className="self-stretch bg-white gap-2 whitespace-nowrap my-auto p-4 rounded-lg"
            >
              Blog
            </Link>
          </nav>
          <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
            <button className="self-stretch bg-[#008059] min-h-12 gap-2 text-base text-white font-semibold text-center my-auto px-6 py-3 rounded-[100px] max-md:px-5">
              Publicar gratis
            </button>
            <div className="bg-white self-stretch flex items-center gap-2 text-[10px] text-white font-bold whitespace-nowrap leading-none justify-center w-10 h-10 my-auto pl-2 pr-[5px] rounded-lg">
              <div className="bg-[#FF5958] self-stretch min-h-4 w-4 h-4 my-auto px-[5px] rounded-[100px]">
                1
              </div>
            </div>
            <div className="items-center bg-neutral-50 self-stretch flex gap-1 my-auto px-2 py-1.5 rounded-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/15765d0360fb970838c32065eb5f3495f362c9fc3b0f8dbc2692ab0aaed82d61?placeholderIfAbsent=true"
                alt="User"
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto rounded-[100px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/fd196771a842408de42535c7c5d807b766475eeac8bc6f354c1fc2b769b11ec3?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
