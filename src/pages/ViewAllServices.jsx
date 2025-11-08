import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import CarImg from "../../assets/homebanner2.avif";
import BikeImg from "../../assets/bike.png";
import ServicesStats from "../components/ServicesStats";

// --- Custom Icons ---
const BikeIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18V6M12 18H6M12 18h6M4 12h16"
    />
  </svg>
);

const CarIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

// --- Dynamic Background Images (Updated to use more reliable links) ---
const heroBackgrounds = {
  // Reliable image link for a Car servicing atmosphere
  car: CarImg,
  // Reliable image link for a Bike servicing atmosphere
  bike: BikeImg,
};

export const servicesData = {
  car: [
    {
      category: "Car Mechanical Services & Works",
      services: [
        "Complete engine repair & tuning",
        "Clutch, brake & suspension works",
        "Gearbox service & replacement",
        "Oil change & filter replacement",
        "Electrical wiring & sensor diagnostics",
        "Battery check & replacement",
        "Cooling system & radiator service",
        "Steering & wheel alignment",
        "AC gas refilling & AC system repair",
        "Fuel injector & throttle body cleaning",
        "Timing belt & chain replacement",
        "Noise & vibration issue diagnosis",
        "Underbody inspection & protection coating",
        "Rat repellent & rust coating",
        "LED & high-illumination headlight installation",
        "Car detailing, interior cleaning & polishing",
        "Complete car restoration & performance upgrades",
      ],
    },
    {
      category: "Car Interior Accessories & Works",
      services: [
        "Ambient light setup (single & multi-color)",
        "Star roof lighting installation",
        "Dashboard wrapping & interior styling",
        "Premium seat cover & leather upholstery",
        "Roof liner replacement & cleaning",
        "Steering cover & custom wrapping",
        "Floor lamination & 7D/9D mat fitting",
        "Door pad restoration & leather finishing",
        "Interior detailing & deep cleaning",
        "Sound damping & noise cancellation works",
        "Android touchscreen music system",
        "Reverse camera & parking sensor fitting",
        "Premium speaker & woofer installation",
        "Armrest installation & cup holder setup",
        "LED foot lights & mood lighting",
        "Sunshade & window curtain fitting",
        "Perfume diffuser & interior accessories setup",
        "Custom interior modification & theme design",
        "Side foot step installation (SUV & MUVs)",
      ],
    },
    {
      category: "Car Detailing & Restoration Services",
      services: [
        "Full body foam wash & deep cleaning",
        "Exterior polishing & gloss enhancement",
        "Interior deep cleaning & vacuuming",
        "Dashboard, roof & seat restoration",
        "Ceramic coating",
        "Graphene coating (deep gloss & slickness)",
        "Matte & gloss PPF installation (8-year warranty)",
        "Headlight & taillight restoration",
        "Underbody rust coating & protection",
        "Engine bay cleaning & shine treatment",
        "Plastic & rubber parts restoration",
        "Paint correction & scratch removal",
        "Full body denting & painting works",
        "Alloy wheel cleaning & painting",
        "Noise cancellation damping work",
        "Car interior & exterior customization",
        "Full car restoration to showroom finish",
      ],
    },
  ],

  bike: [
    {
      category: "Bike Mechanical Services",
      services: [
        "Complete engine repair & tuning",
        "Clutch & brake overhaul",
        "Oil change & filter replacement",
        "Chain & sprocket replacement",
        "Suspension repair & setup",
        "Carburetor & fuel injection cleaning",
        "Battery check & replacement",
        "Electrical wiring & lighting works",
        "Wheel alignment & balancing",
        "Gearbox repair & maintenance",
        "Cooling system check-up",
        "Tyre replacement & puncture repair",
        "Noise & vibration issue diagnosis",
        "Full bike restoration & repainting",
      ],
    },
    {
      category: "Bike Restoration Services",
      services: [
        "Complete engine restoration & tuning",
        "Full-body repainting & denting work",
        "Chassis cleaning, repair & coating",
        "Rust removal & anti-rust protection",
        "Electrical wiring restoration",
        "Suspension & brake system rebuild",
        "Carburetor & fuel system cleaning",
        "Clutch, gear & bearing replacement",
        "Seat & interior re-upholstery",
        "Alloy & wheel restoration",
        "Headlight & indicator replacement",
        "Chrome part polishing & renewal",
        "Custom paint & graphic designs",
        "Matte / Gloss PPF & ceramic coating",
        "Final detailing & finishing touches",
      ],
    },
    {
      category: "Bike Detailing Services",
      services: [
        "Full-body foam wash & deep cleaning",
        "Premium polishing & gloss enhancement",
        "Ceramic coating",
        "Matte & gloss PPF installation",
        "Chain cleaning & lubrication",
        "Engine bay cleaning & shine treatment",
        "Plastic & rubber part restoration",
        "Headlight & taillight restoration",
        "Rust removal & metal protection",
        "Underbody wash & protection coat",
        "Water spot & swirl mark removal",
        "Paint correction & scratch removal",
        "Interior panel & seat cleaning",
        "Bike waxing & UV protection",
        "Chrome parts polishing & shine restore",
      ],
    },
  ],
};

const ViewAllServices = () => {
  const [activeTab, setActiveTab] = useState("car");
  const [expandedCategory, setExpandedCategory] = useState(0);

  const toggleCategory = (categoryIndex) => {
    setExpandedCategory(
      expandedCategory === categoryIndex ? null : categoryIndex
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const tabVariants = {
    active: {
      scale: 1.0,
      backgroundColor: "rgb(220, 38, 38, 0.7)",
      borderColor: "rgb(220, 38, 38)",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      backgroundColor: "rgb(31, 41, 55, 1)",
      borderColor: "rgb(31, 41, 55, 1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black  container">
      {/* Hero Section with Dynamic Background */}
      <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Dynamic Background Image Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Key changes when tab changes, forcing re-render/animation
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBackgrounds[activeTab]})`,
              // Subtle overlay to ensure text readability
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
            }}
          >
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-black/70"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-tech font-black text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 appTitle">
              All <span className="text-red-500">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-modern text-gray-300 max-w-2xl mx-auto px-3 sm:px-4 subtitle">
              Comprehensive automotive services for cars and bikes with expert
              care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-4 sm:py-5 md:py-6 lg:py-8 -mt-10 relative z-20">
        {" "}
        {/* Lift tabs slightly over the hero */}
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-1 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl border border-red-500/30 tabRow">
              <div className="flex gap-1">
                {[
                  { id: "car", label: "Car Services", icon: CarIcon },
                  { id: "bike", label: "Bike Services", icon: BikeIcon },
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setExpandedCategory(0);
                      }}
                      variants={tabVariants}
                      animate={isActive ? "active" : "inactive"}
                      className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl border text-white font-industrial font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 flex-1 tabItem ${
                        isActive ? "activeTab" : ""
                      }`}
                    >
                      <IconComponent
                        className={`${
                          isActive ? "text-white" : "text-red-500"
                        }`}
                      />
                      <span className="tabLabel activeTabText">
                        {tab.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-6xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 cardGrid"
            >
              {servicesData[activeTab].map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/40 transition-all duration-300 cardContainer"
                >
                  {/* Category Header */}
                  <motion.div
                    className="p-3 sm:p-4 md:p-5 lg:p-6 cursor-pointer headerContainer"
                    onClick={() => toggleCategory(categoryIndex)}
                    whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 headerRightSection">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 serviceImage">
                          <FiCheckCircle className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-industrial font-bold text-white truncate headerTitle">
                            {category.category}
                          </h3>
                          <p className="text-gray-400 font-modern text-xs sm:text-sm md:text-sm serviceDesc">
                            {category.services.length} services available
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedCategory === categoryIndex ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <FiArrowRight className="text-white text-base sm:text-lg md:text-xl" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Services List (Image removed) */}
                  <AnimatePresence>
                    {expandedCategory === categoryIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="border-t border-gray-700"
                      >
                        <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                          {/* Service Image div removed here as requested */}

                          {/* Services Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
                            {category.services.map((service, serviceIndex) => (
                              <motion.div
                                key={service}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: serviceIndex * 0.05,
                                }}
                                className="flex items-center gap-1.5 sm:gap-2 md:gap-3 p-1.5 sm:p-2 md:p-2.5 lg:p-3 bg-gray-700/30 rounded-md sm:rounded-lg border border-gray-600 hover:border-red-500/50 transition-all duration-300 serviceCard"
                              >
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-300 font-modern text-xs sm:text-xs md:text-sm leading-tight flex-1 serviceTitle">
                                  {service}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="w-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial font-semibold rounded-lg sm:rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base bookButton"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FiCheckCircle className="text-sm sm:text-base md:text-lg" />
                            <span className="bookButtonText">
                              Book {category.category.split(" ")[0]}{" "}
                              {category.category.split(" ")[1]}
                            </span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gray-800/20">
        <div className="container mx-auto px-4 sm:px-5 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-tech font-black text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 sectionTitle">
              Ready to Service Your{" "}
              <span className="text-red-500">
                {activeTab === "car" ? "Car" : "Bike"}
              </span>
              ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-modern text-gray-300 mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-3 sm:px-4 subtitle">
              Book your appointment today and experience professional automotive
              care
            </p>
            <motion.button
              className="px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="buttonText">Book Appointment Now</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <ServicesStats />
      </motion.div>
    </div>
  );
};

export default ViewAllServices;
