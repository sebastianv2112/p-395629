import React, { useState } from "react";

interface ContactFormProps {
  onSubmit?: (data: { name: string; phone: string }) => void;
  buttonText?: string;
  buttonIcon?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  buttonText = "Solicitar asistencia",
  buttonIcon = "https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/5d22c30c7541b2ba4bbc853f91d92dc4460ea3141069749ce4b12bb5a21dbbd6?placeholderIfAbsent=true",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col items-stretch font-normal justify-center ${className}`}
    >
      <div className="flex w-full gap-4 text-sm text-[#949494] leading-none justify-center max-md:max-w-full">
        <div className="whitespace-nowrap flex-1 shrink basis-[0%]">
          <input
            type="text"
            name="name"
            placeholder="Nombre*"
            value={formData.name}
            onChange={handleChange}
            required
            className="justify-between items-center border border-[color:var(--UI-colors-Strokes-AA,#949494)] bg-white w-full min-h-10 px-3 py-2.5 rounded-md border-solid"
          />
        </div>
        <div className="flex-1 shrink basis-[0%]">
          <input
            type="tel"
            name="phone"
            placeholder="Número telefónico *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="justify-between items-center border border-[color:var(--UI-colors-Strokes-AA,#949494)] bg-white w-full min-h-10 px-3 py-2.5 rounded-md border-solid"
          />
        </div>
      </div>
      <button
        type="submit"
        className="justify-center items-center bg-[#008059] flex min-h-10 gap-2 text-base text-white text-center mt-4 px-6 py-2.5 rounded-[100px] max-md:px-5"
      >
        <span className="self-stretch my-auto">{buttonText}</span>
        <img
          src={buttonIcon}
          alt="Submit"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
        />
      </button>
    </form>
  );
};

export default ContactForm;
