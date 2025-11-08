import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919392338987"; // Your WhatsApp number with country code
  const message =
    "Hello FixinMoto! 🚗 I'm interested in your automotive services. Could you please provide more information about:"; // Default message

  const handleWhatsAppClick = (customMessage = "") => {
    const finalMessage = customMessage || message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      finalMessage
    )}`;
    window.open(url, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const quickMessages = [
    {
      text: "Car Service Appointment",
      message:
        "Hello FixinMoto! 🚗 I'd like to book a car service appointment. Please share available slots.",
    },
    {
      text: "Bike Repair Quote",
      message:
        "Hello FixinMoto! 🏍️ I need a quote for bike repair services. Can you help?",
    },
    {
      text: "Service Pricing",
      message:
        "Hello FixinMoto! 💰 Could you share your service pricing for regular maintenance?",
    },
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-20 right-0 mb-4 space-y-3 w-64"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quick Message Options */}
              <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 border border-red-500/20 shadow-2xl">
                <h3 className="text-white font-industrial font-semibold text-sm mb-3 text-center">
                  Quick Messages
                </h3>
                <div className="space-y-2">
                  {quickMessages.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleWhatsAppClick(item.message)}
                      className="w-full text-left px-3 py-2 bg-gray-700/50 hover:bg-red-500/20 rounded-lg border border-gray-600 hover:border-red-500/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-300 font-modern group-hover:text-white text-xs font-medium">
                        {item.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* Call Option */}
                <motion.button
                  onClick={handleCallClick}
                  className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg border border-red-500/20 hover:from-red-700 hover:to-red-800 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm font-industrial font-semibold">
                    Call: 93923 38987
                  </span>
                </motion.button>

                {/* WhatsApp Option */}
                <motion.button
                  onClick={() => handleWhatsAppClick()}
                  className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-lg border border-green-500/20 hover:from-green-700 hover:to-green-800 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
                  </svg>
                  <span className="text-sm font-industrial font-semibold">
                    WhatsApp Us
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl border-2 border-green-400/30 hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
          </svg>

          {/* Notification Dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white font-modern text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Contact FixinMoto
          </div>
        </motion.button>
      </motion.div>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;
