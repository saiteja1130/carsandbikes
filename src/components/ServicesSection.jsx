import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { servicesData } from "../assetsdata/services";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("car");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [maxServicesToShow, setMaxServicesToShow] = useState(8);
  const navigate = useNavigate();

  const activeGroups = servicesData[activeTab];

  useEffect(() => {
    const updateMaxServices = () => {
      setMaxServicesToShow(window.innerWidth < 640 ? 4 : 8);
    };

    updateMaxServices();
    window.addEventListener("resize", updateMaxServices);
    return () => window.removeEventListener("resize", updateMaxServices);
  }, []);

  const currentServices = activeGroups[selectedCategory]?.services
    .filter((service) => service.image)
    .map((service) => ({
      category: activeGroups[selectedCategory].category,
      title: service.name,
      image: service.image,
    }))
    .slice(0, maxServicesToShow);

  const hasMoreServices =
    activeGroups[selectedCategory]?.services.length > maxServicesToShow;

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const categoryTabVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleViewMore = () => {
    navigate("/services", {
      state: {
        activeTab,
        selectedCategory,
        categoryName: activeGroups[selectedCategory]?.category,
      },
    });
  };

  return (
    <motion.section
      className="w-full bg-black py-20 md:py-32 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-black to-black"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={tabVariants}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-tech font-black text-white mb-4 md:mb-6"
            variants={tabVariants}
          >
            Our <span className="text-red-500">Services</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg font-modern text-gray-400 max-w-2xl mx-auto"
            variants={tabVariants}
          >
            Premium automotive care with cutting-edge technology and expert
            craftsmanship
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          variants={tabVariants}
        >
          <div className="inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-2 bg-black/50 border border-red-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm">
            {["car", "bike"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedCategory(0);
                }}
                className={`relative px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl font-industrial font-bold text-sm sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg sm:rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "car" ? "Car Services" : "Bike Services"}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeGroups?.length > 0 && (
            <motion.div
              key={`categories-${activeTab}`}
              className="flex justify-center mb-8 md:mb-12 flex-wrap gap-2 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.4 }}
            >
              {activeGroups.map((group, index) => (
                <motion.button
                  key={`${activeTab}-${index}`}
                  variants={categoryTabVariants}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-industrial font-semibold text-sm sm:text-base transition-all duration-300 min-w-[150px] sm:min-w-[200px] text-center ${
                    selectedCategory === index
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-500/30"
                      : "bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      selectedCategory !== index
                        ? "0 10px 30px -10px rgba(220, 38, 38, 0.3)"
                        : "none",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {group.category.split(" ").slice(0, 2).join(" ") +
                    (group.category.split(" ").length > 2 ? "..." : "")}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {currentServices.map((service, index) => (
              <motion.div
                key={`${activeTab}-${service.title}-${index}`}
                variants={cardVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer serviceCard overflow-hidden rounded-2xl h-64"
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <motion.h3
                    className="text-white font-modern font-bold text-lg leading-snug"
                    initial={false}
                    animate={{ color: hoveredCard === index ? "#fecaca" : "#ffffff" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.span
                    className="text-red-400 font-industrial text-xs font-semibold tracking-wider uppercase mt-2"
                    initial={false}
                    animate={{ color: hoveredCard === index ? "#f87171" : "#f87171" }}
                  >
                    {service.category}
                  </motion.span>
                  <motion.div
                    className="absolute top-6 right-6 text-red-500"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                      x: hoveredCard === index ? 0 : 8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMoreServices && (
          <motion.div className="text-center mt-8 md:mt-12" variants={tabVariants}>
            <motion.button
              onClick={handleViewMore}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial text-sm sm:text-base font-bold rounded-xl border border-red-500/30 relative overflow-hidden group"
            >
              <span className="relative z-10">VIEW MORE SERVICES</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        )}
        <Link to="/booknow">
          <motion.div className="text-center mt-6 md:mt-8" variants={tabVariants}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-transparent text-white font-industrial text-sm sm:text-base font-bold rounded-xl border-2 border-red-500 hover:bg-red-500 transition-all duration-300"
            >
              <span className="relative z-10 buttonText">BOOK APPOINTMENT</span>
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
};

export default ServicesSection;