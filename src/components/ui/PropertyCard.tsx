import React from "react";

interface PropertyCardProps {
  size?: "small" | "normal";
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  size = "normal",
  className = "",
}) => {
  if (size === "small") {
    return (
      <div
        className={`bg-white shadow-[0px_1px_8px_rgba(0,0,0,0.08)] border absolute z-0 overflow-hidden font-normal w-28 rounded-[9px] border-[rgba(224,223,224,1)] border-solid ${className}`}
      >
        <div className="items-stretch border-[color:var(--Behavior-Neutral-Colors-scarpaGray-50,#F3F3F3)] bg-white flex w-full flex-col justify-center px-2 py-[11px] rounded-[0px_0px_2.624px_2.624px] border-[0.328px] border-solid">
          <div className="w-full">
            <div className="w-full">
              <div className="self-stretch flex-1 shrink basis-[0%] w-full text-[7px] text-[#252129] font-bold tracking-[0.07px] leading-none">
                <span className="font-semibold text-[8px]">$2,620,000</span>{" "}
                <span className="font-normal text-[5px] leading-[7px]">
                  MXN
                </span>
              </div>
              <div className="flex w-full gap-1 text-[7px] text-[#6D6970] leading-3">
                <div className="flex h-[11px] items-center gap-0.5 text-[6px] whitespace-nowrap leading-[11px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/9a5349e8d15a117702dd3afb4d87d4c80173124db7cbbbca4f9a10c77ce78263?placeholderIfAbsent=true"
                    alt="Bedrooms"
                    className="aspect-[0.89] object-contain w-2 self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">2</div>
                </div>
                <div className="text-[#D3D3D4]">•</div>
                <div className="flex h-[11px] items-center gap-0.5 whitespace-nowrap">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/da724c14ed1083495d9938008786862808e7c72e17c2bc31fe2c0a746b891f63?placeholderIfAbsent=true"
                    alt="Bathrooms"
                    className="aspect-[0.89] object-contain w-2 self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">4</div>
                </div>
                <div className="text-[#D3D3D4] text-[5px] leading-[8px]">•</div>
                <div className="flex h-[11px] items-center gap-0.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/a83e6a0441b2c8557c0dad8d221c8a465e845d547a237205d652e24c1a754344?placeholderIfAbsent=true"
                    alt="Area"
                    className="aspect-[0.89] object-contain w-2 self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">166.79 m²</div>
                </div>
              </div>
              <div className="flex w-full flex-col overflow-hidden items-stretch justify-center">
                <div className="text-[#252129] text-ellipsis text-[6px] leading-[1.1]">
                  Departamento en Venta
                </div>
                <div className="text-[#6D6970] text-ellipsis whitespace-nowrap text-[8px] leading-3">
                  Zibatá, El Marquéz, Agave #7, Querétaro, México. CP: 76543
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white shadow-[0px_3px_16px_rgba(0,0,0,0.08)] self-stretch w-[213px] my-auto rounded-[11px] ${className}`}
    >
      <div className="flex flex-col relative aspect-[1.469] min-h-[145px] w-full items-stretch justify-between px-[5px] py-1.5 rounded-[5px_5px_0px_0px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/dceaf202dc1891e87faec0020598a6784136568633e6b9a1beb70ded38432b64?placeholderIfAbsent=true"
          alt="Property"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex w-full items-center gap-[40px_57px] text-[8px] text-[rgba(50,28,22,1)] font-bold whitespace-nowrap uppercase tracking-[0.39px] leading-none justify-between">
          <div className="bg-[rgba(244,204,116,1)] self-stretch min-h-4 my-auto px-[5px] py-1 rounded-[3px]">
            Destacado
          </div>
          <div className="bg-blend-normal bg-[rgba(0,0,0,0.5)] border self-stretch flex w-3 shrink-0 h-2.5 my-auto border-white border-solid" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/979099c3d538ccff41a4f0ac12461693a8dd83124dd81fe67294ec104257708f?placeholderIfAbsent=true"
            alt="Share"
            className="aspect-[1.2] object-contain w-3 fill-[rgba(0,0,0,0.50)] stroke-[0.986px] stroke-white self-stretch shrink-0 my-auto"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/bc56a4c38cf23cd85925d41d3087ac53f2e2cd200334de7511d5fc0cd2e5454b?placeholderIfAbsent=true"
          alt="Property details"
          className="aspect-[11.24] object-contain w-full mt-[35px]"
        />
        <div className="relative self-center flex w-full max-w-[202px] flex-col items-center mt-[35px] pt-4 pb-2">
          <div className="flex min-h-[5px] gap-[5px]" />
        </div>
      </div>
      <div className="border-[color:var(--Behavior-Neutral-Colors-scarpaGray-50,#F3F3F3)] bg-white w-full p-[11px] rounded-[0px_0px_5.259px_5.259px] border-[0.657px] border-solid">
        <div className="w-full font-normal">
          <div className="w-full">
            <div className="self-stretch flex-1 shrink basis-[0%] w-full text-sm text-[#252129] font-bold tracking-[0.14px] leading-none">
              <span className="font-semibold text-[12px]">$17,620,000</span>{" "}
              <span className="font-normal text-[9px] leading-[13px]">MXN</span>
            </div>
            <div className="flex w-full gap-2 text-[9px] text-[#6D6970] leading-4 mt-[5px]">
              <div className="flex h-4 items-center gap-[3px] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/120ff237c8b055caeda059a152bc936ee1ba4a01735c26a3cfd8c19e96e84d14?placeholderIfAbsent=true"
                  alt="Bedrooms"
                  className="aspect-[0.91] object-contain w-2.5 self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">2</div>
              </div>
              <div className="text-[#D3D3D4]">•</div>
              <div className="flex h-4 items-center gap-[3px] whitespace-nowrap">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/fc52546177ac6ddb0f9750d6e8cc3c92cdd2d929711fa80990901408f4a2c159?placeholderIfAbsent=true"
                  alt="Bathrooms"
                  className="aspect-[1] object-contain w-[11px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">4</div>
              </div>
              <div className="text-[#D3D3D4]">•</div>
              <div className="flex h-4 items-center gap-[3px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/9e47c66a3e762172d9f8ab12d9df8e5d39b0c1828e9a1c7ad70838014794d2a2?placeholderIfAbsent=true"
                  alt="Area"
                  className="aspect-[1] object-contain w-[11px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">166.79 m²</div>
              </div>
            </div>
            <div className="flex w-full flex-col overflow-hidden items-stretch justify-center mt-[5px]">
              <div className="text-[#252129] text-ellipsis text-[9px] leading-none">
                Terreno Habitacional en Venta
              </div>
              <div className="text-[#6D6970] text-ellipsis whitespace-nowrap text-[11px] leading-4">
                Zibatá, El Marquéz, Agave #7, Querétaro, México. CP: 76543
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[11px] whitespace-nowrap text-center mt-4">
          <button className="border self-stretch flex min-h-[26px] items-center gap-[5px] text-[9px] text-[rgba(0,128,89,1)] font-normal leading-none justify-center w-[91px] my-auto px-[15px] py-1.5 rounded-[66px] border-[rgba(0,128,89,1)] border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/4fe16d12cb1b3ccf7adeecb4b522f465c628a538eac248b8484e3f0ce4b2fb72?placeholderIfAbsent=true"
              alt="Contact"
              className="aspect-[1.08] object-contain w-[13px] self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch my-auto">Contactar</span>
          </button>
          <button className="bg-[rgba(0,124,79,1)] self-stretch flex min-h-[26px] items-center gap-[5px] text-[11px] text-white font-medium justify-center w-[91px] my-auto px-2 py-[7px] rounded-[66px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/9408823f2aad3d8eb823176d15e91ba91b558e47fc68b7959eee2d7ff3c98708?placeholderIfAbsent=true"
              alt="WhatsApp"
              className="aspect-[1.17] object-contain w-3.5 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch my-auto">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
