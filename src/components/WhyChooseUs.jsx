import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaUsers, FaClock, FaShieldAlt, FaTools, FaHeadset, FaStar } from "react-icons/fa";
import mainImage from "../../assets/whychoose1.jpg";
import smallImage from "../../assets/whychoose1.jpg";

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
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(239, 68, 68, 0.3)",
        "0 0 40px rgba(239, 68, 68, 0.6)",
        "0 0 20px rgba(239, 68, 68, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="w-full bg-black py-32 relative overflow-hidden"
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
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
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

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="text-red-500 font-industrial font-bold text-sm uppercase tracking-wider mb-4 block"
              variants={itemVariants}
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-tech font-black text-white leading-tight mb-8"
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
                FixinMoto
              </motion.span>{" "}
              Difference
            </motion.h2>

            <motion.p
              className="text-xl font-modern text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Discover why thousands of vehicle owners trust FixinMoto for 
              premium automotive care with unmatched expertise and cutting-edge technology.
            </motion.p>

            {/* Enhanced Features List - Red & Black Only */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-all duration-500 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                  }}
                >
                  {/* Red Glow Effect on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    whileHover={{ opacity: 0.08 }}
                  />
                  
                  {/* Animated Red Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl" />
                  </div>

                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div 
                      className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-500/20"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="text-white text-xl" />
                    </motion.div>
                    <span className="text-white font-modern font-semibold text-lg leading-tight flex-1">
                      {feature.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats Grid - Red & Black Only */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-all duration-500 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                >
                  {/* Red Background Animation */}
                  <motion.div 
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                    whileHover={{ opacity: 0.08 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="flex justify-center mb-3"
                      variants={floatingVariants}
                      animate="floating"
                    >
                      <stat.icon className="text-red-500 text-2xl" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-tech font-black text-red-500 mb-2">
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
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={containerVariants}
            >
              <motion.button
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial font-bold text-lg skew-x-[-12deg] transform transition-all duration-300 group overflow-hidden"
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
                  boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-5 bg-transparent text-white font-industrial font-bold text-lg skew-x-[-12deg] transform transition-all duration-300 group overflow-hidden border-2 border-red-500 hover:bg-red-500"
              >
                <span className="block skew-x-12 relative z-10">
                  Free Consultation
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Images Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden relative">
                <img
                  src={mainImage}
                  className="w-full h-full object-cover"
                  alt="FixinMoto Premium Service"
                />
                {/* Red Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-red-900/10 to-black/30"></div>
                
                {/* Floating Text Overlay */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 p-6 rounded-2xl backdrop-blur-sm border border-red-500/20">
                    <h3 className="text-white font-tech font-bold text-xl mb-2">Premium Service Guaranteed</h3>
                    <p className="text-white/90 font-modern text-sm">Expert technicians using latest technology</p>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Floating Elements - Red Only */}
              <motion.div
                className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30"
                variants={floatingVariants}
                animate="floating"
              >
                <FaAward className="text-white text-xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/30"
                variants={pulseVariants}
                animate="pulse"
              >
                <span className="text-white font-tech font-black text-sm">15+</span>
              </motion.div>

              {/* Star Rating - Red Only */}
              <motion.div
                className="absolute top-6 right-6 bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 rounded-2xl shadow-lg"
                variants={glowVariants}
                animate="glow"
              >
                <div className="flex items-center gap-2">
                  <FaStar className="text-white text-lg" />
                  <span className="text-white font-tech font-bold text-lg">4.9/5</span>
                  <span className="text-white/80 font-modern text-sm">Rating</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Secondary Image */}
            <motion.div
              className="absolute left-4 lg:left-8 bottom-8 w-48 h-36 lg:w-56 lg:h-44 rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-2xl shadow-red-500/30 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                borderColor: "rgba(239, 68, 68, 0.8)",
              }}
            >
              <img
                src={smallImage}
                className="w-full h-full object-cover"
                alt="FixinMoto Detail"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent"></div>
              
              {/* Small Image Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-lg shadow-lg"
                variants={pulseVariants}
                animate="pulse"
              >
                <span className="text-white font-industrial text-xs font-bold">NEW</span>
              </motion.div>
            </motion.div>

            {/* Enhanced Background Decorations - Red Only */}
            <motion.div
              className="absolute -right-10 -top-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
              variants={pulseVariants}
              animate="pulse"
            />
            <motion.div
              className="absolute -left-10 -bottom-10 w-48 h-48 bg-red-500/5 rounded-full blur-3xl"
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