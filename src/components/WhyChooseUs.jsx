import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaStar,
} from "react-icons/fa";
import mainImage from "../assets/whychooseus.jpg";
import { Link } from "react-router-dom";
// import smallImage from "../assets/whychoose1.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaAward,
      text: "Certified and experienced technicians",
    },
    {
      icon: FaUsers,
      text: "Transparent pricing with no hidden charges",
    },
    {
      icon: FaTools,
      text: "Advanced tools and diagnostic equipment",
    },
    {
      icon: FaCheckCircle,
      text: "Fast, reliable service you can trust",
    },
    {
      icon: FaShieldAlt,
      text: "Warranty on all services and parts",
    },
    {
      icon: FaHeadset,
      text: "24/7 customer support & assistance",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: FaAward },
    { number: "10K+", label: "Happy Customers", icon: FaUsers },
    { number: "50+", label: "Expert Technicians", icon: FaTools },
    { number: "24/7", label: "Support", icon: FaHeadset },
  ];

  // Section entrance animation
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
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
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const floatingVariants = {
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(239, 68, 68, 0.3)",
        "0 0 40px rgba(239, 68, 68, 0.6)",
        "0 0 20px rgba(239, 68, 68, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full bg-black py-20 lg:py-32 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Animated Background with Red Theme Only */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-red-500/10 to-red-900/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-500/5 to-red-900/3"
          animate={{
            backgroundPosition: ["100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Animated Red Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <motion.span
              className="text-red-500 font-industrial font-bold text-sm uppercase tracking-wider mb-3 block"
              variants={itemVariants}
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-tech font-black text-white leading-tight mb-6"
              variants={itemVariants}
            >
              The{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 font-tech"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                DetailXMechanic
              </motion.span>{" "}
              Difference
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl font-modern text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Discover why thousands of vehicle owners trust DetailXMechanic for
              premium automotive care with unmatched expertise and cutting-edge
              technology.
            </motion.p>

            {/* Enhanced Features List - Red & Black Only */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-all duration-500 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                >
                  {/* Red Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    whileHover={{ opacity: 0.08 }}
                  />

                  {/* Animated Red Border */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ padding: "2px" }}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-2xl" />
                  </div>

                  <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                    <motion.div
                      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-500/20"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="text-white text-lg sm:text-xl" />
                    </motion.div>
                    <span className="text-white font-modern font-semibold text-sm sm:text-base leading-tight flex-1">
                      {feature.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats Grid - Red & Black Only */}
            <motion.div
              className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-10"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-all duration-500 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                >
                  {/* Red Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    whileHover={{ opacity: 0.08 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="flex justify-center mb-2 sm:mb-3"
                      variants={floatingVariants}
                      animate="floating"
                    >
                      <stat.icon className="text-red-500 text-xl sm:text-2xl" />
                    </motion.div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-tech font-black text-red-500 mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs font-industrial text-gray-400 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Parallelogram Style Buttons - Red Only */}
            <Link to="/booknow">
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                variants={containerVariants}
              >
                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial font-bold text-base sm:text-lg skew-x-[-12deg] transform transition-all duration-300 group overflow-hidden"
                >
                  <span className="block skew-x-12 relative z-10">
                    Book Service Now
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Red Shine Effect */}
                  <motion.div
                    className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-12deg]"
                    whileHover={{ left: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 sm:px-8 py-4 sm:py-5 bg-transparent text-white font-industrial font-bold text-base sm:text-lg skew-x-[-12deg] transform transition-all duration-300 group overflow-hidden border-2 border-red-500 hover:bg-red-500"
                >
                  <span className="block skew-x-12 relative z-10">
                    Free Consultation
                  </span>
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Enhanced Images Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 w-full max-w-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden relative">
                <img
                  src={mainImage}
                  className="w-full h-full object-cover"
                  alt="Premium Service"
                />
                {/* Red Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-red-900/10 to-black/30"></div>

                {/* Floating Text Overlay */}
                <motion.div
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-red-500/20">
                    <h3 className="text-white font-tech font-bold text-lg sm:text-xl mb-2">
                      Premium Service Guaranteed
                    </h3>
                    <p className="text-white/90 font-modern text-sm sm:text-base">
                      Expert technicians using latest technology
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-red-600 to-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg"
                variants={glowVariants}
                animate="glow"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaStar className="text-white text-base sm:text-lg" />
                  <span className="text-white font-tech font-bold text-base sm:text-lg">
                    4.9/5
                  </span>
                  <span className="text-white/80 font-modern text-xs sm:text-sm">
                    Rating
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -right-6 -top-6 w-48 h-48 sm:w-64 sm:h-64 bg-red-500/10 rounded-full blur-3xl"
              variants={pulseVariants}
              animate="pulse"
            />
            <motion.div
              className="absolute -left-6 -bottom-6 w-32 h-32 sm:w-48 sm:h-48 bg-red-500/5 rounded-full blur-3xl"
              variants={pulseVariants}
              animate="pulse"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
