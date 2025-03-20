
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { X, Phone, CheckCircle2 } from "lucide-react";

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phoneNumber: string) => void;
  title?: string;
  buttonText?: string;
  isSubmitted?: boolean;
}

const PhoneModal: React.FC<PhoneModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Déjanos tu número",
  buttonText = "Enviar",
  isSubmitted = false,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }
  }, [isSubmitted]);

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
        
        // Reset form but don't close modal (will be handled by parent based on isSubmitted)
        setPhoneNumber("");
        
      } catch (error) {
        console.error("Error saving phone number:", error);
        toast.error("Hubo un error al enviar tu número. Por favor intenta de nuevo.");
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 animate-fade-in">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative animate-scale-in shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
        
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 mb-4 text-green-600 animate-scale-in">
              <CheckCircle2 size={64} className="animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">¡Gracias!</h3>
            <p className="text-gray-600 text-center">
              Hemos recibido tu número y te contactaremos muy pronto.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 bg-[rgba(235,254,244,1)] flex items-center justify-center rounded-full mb-4">
                <Phone className="h-6 w-6 text-[#008059]" />
              </div>
              <h2 className="text-xl font-semibold text-center">{title}</h2>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Te contactaremos lo más pronto posible
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Número telefónico"
                  className="w-full border border-[#E6E5E7] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#008059] focus:border-transparent transition-all pl-10"
                  required
                />
                <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#008059] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-[rgba(0,128,89,0.9)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,128,89,0.3)]"
              >
                <span>{isSubmitting ? "Enviando..." : buttonText}</span>
                {!isSubmitting && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b8628246b4fa4846b671e4072fe20009/5d22c30c7541b2ba4bbc853f91d92dc4460ea3141069749ce4b12bb5a21dbbd6?placeholderIfAbsent=true"
                    alt="Submit"
                    className="w-5 h-5 object-contain"
                  />
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PhoneModal;
