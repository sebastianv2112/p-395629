
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phoneNumber: string) => void;
  title?: string;
  buttonText?: string;
}

const PhoneModal: React.FC<PhoneModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Déjanos tu número",
  buttonText = "Enviar",
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phoneNumber) {
      setIsSubmitting(true);
      
      try {
        // Save to Supabase
        const { error } = await supabase
          .from('contact_broker')
          .insert([{ phone: phoneNumber }]);
          
        if (error) {
          throw error;
        }
        
        // Call the parent component's onSubmit function
        onSubmit(phoneNumber);
        
        // Reset form
        setPhoneNumber("");
        
        // Close modal
        onClose();
        
      } catch (error) {
        console.error("Error saving phone number:", error);
        toast.error("Hubo un error al enviar tu número. Por favor intenta de nuevo.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <h2 className="text-xl font-semibold text-center mb-6">{title}</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Número telefónico"
            className="border border-[#949494] rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#008059]"
            required
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#008059] text-white font-semibold py-2.5 px-6 rounded-full flex items-center justify-center gap-2"
          >
            <span>{isSubmitting ? "Enviando..." : buttonText}</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/5d22c30c7541b2ba4bbc853f91d92dc4460ea3141069749ce4b12bb5a21dbbd6?placeholderIfAbsent=true"
              alt="Submit"
              className="w-5 h-5 object-contain"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneModal;
