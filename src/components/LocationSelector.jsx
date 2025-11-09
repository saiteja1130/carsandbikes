import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiNavigation, FiMapPin } from "react-icons/fi";

const LocationSection = () => {
  const branchInfo = {
    name: "MIYAPUR",
    address: "Miyapur Main Road, Telangana 500049",
    phone: "+91 9876543210",
    coordinates: {
      lat: 17.5169014,
      lng: 78.3428304,
    },
  };

  const handleCall = () => {
    window.open(`tel:${branchInfo.phone}`);
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${branchInfo.coordinates.lat},${branchInfo.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.252033606997!2d78.3317719602434!3d17.477065609532577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcg0g8464303d8d%3A0x6b30f81d459d80d2!2sMiyapur%2C%20Hyderabad%2C%20Telangana%20500049!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tech font-black text-white mb-2 sm:mb-3 md:mb-4">
              OUR <span className="text-red-500">LOCATION</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-modern text-gray-300 max-w-2xl mx-auto px-4">
              Visit us at our Miyapur service center
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            
            {/* Left Side - Map */}
            <motion.div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DetailXMechanic Miyapur Branch"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Side - Location Info Card */}
            <motion.div
              className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800 shadow-2xl shadow-red-900/10 h-full flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                {/* Location Name */}
                <div className="text-left mb-4 sm:mb-6 md:mb-8">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-tech font-black text-white uppercase tracking-tight leading-tight">
                    {branchInfo.name}
                  </h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <FiMapPin className="text-red-500 text-lg sm:text-xl md:text-2xl mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-left font-modern font-semibold text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    {branchInfo.address}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start mb-6 sm:mb-8 md:mb-10">
                  {/* Call Button */}
                  <motion.button
                    onClick={handleCall}
                    className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 group flex-1 min-w-0"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPhone className="text-base sm:text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="truncate">Call Now</span>
                  </motion.button>

                  {/* Directions Button */}
                  <motion.button
                    onClick={handleGetDirections}
                    className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-red-600 text-white font-industrial font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl hover:bg-red-600 transition-all duration-300 group flex-1 min-w-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiNavigation className="text-base sm:text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="truncate">Get Directions</span>
                  </motion.button>
                </div>
              </div>

              {/* Additional Info / CTA Footer */}
              <div className="w-full">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center bg-gray-900/50 rounded-lg p-0">
                  <div className="py-3 sm:py-4 border-r border-gray-700">
                    <div className="text-xl sm:text-2xl md:text-3xl font-tech font-bold text-white mb-1">24/7</div>
                    <div className="text-gray-400 font-modern text-xs sm:text-sm">Service</div>
                  </div>
                  <div className="py-3 sm:py-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-tech font-bold text-white mb-1">Free</div>
                    <div className="text-gray-400 font-modern text-xs sm:text-sm">Consultation</div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="mt-4 sm:mt-6 text-left">
                  <p className="text-gray-400 font-modern text-xs sm:text-sm">
                    <span className="text-red-500">•</span> Mon-Sun: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-400 font-modern text-xs sm:text-sm mt-1">
                    <span className="text-red-500">•</span> Emergency Services: 24/7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;