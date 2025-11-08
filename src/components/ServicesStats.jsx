import React from "react";
import { motion } from "framer-motion";
import { FiTool, FiUsers, FiCheckCircle, FiAward } from "react-icons/fi";

const ServicesStats = () => {
  const stats = [
    {
      icon: <FiUsers className="text-xl sm:text-2xl md:text-3xl" />,
      number: "+15",
      title: "Your Experience",
      description: "Years of dedicated service excellence",
    },
    {
      icon: <FiTool className="text-xl sm:text-2xl md:text-3xl" />,
      number: "20+",
      title: "Expert Practicians",
      description: "Certified professionals at your service",
    },
    {
      icon: <FiCheckCircle className="text-xl sm:text-2xl md:text-3xl" />,
      number: "1,200+",
      title: "Projects Completed",
      description: "Successful repairs and services",
    },
    {
      icon: <FiAward className="text-xl sm:text-2xl md:text-3xl" />,
      number: "100%",
      title: "Satisfaction Risk",
      description: "Customer satisfaction guaranteed",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-tech font-black text-white mb-4 sm:mb-6 leading-tight">
              Expert Automotive
              <br />
              <span className="text-red-500">Care for Every Need</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-modern text-gray-300 max-w-2xl mx-auto px-4">
              Trust our experienced team for all your vehicle service requirements
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-red-500/20 text-center group hover:border-red-500/40 transition-all duration-300"
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)",
                }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-red-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:bg-red-500/30 transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Number - Large and Bold */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tech font-black text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>

                {/* Title - Exactly as in your image */}
                <h3 className="text-sm sm:text-base md:text-lg font-industrial font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wide">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-modern text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="w-0 h-0.5 sm:h-1 bg-red-500 mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 transition-all duration-300"
                  whileHover={{ width: "3rem" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Services Info */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-red-500/20 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-industrial font-bold text-white mb-3 sm:mb-4">
                Why Trust Our Services?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-gray-300">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <FiCheckCircle className="text-red-500 text-sm sm:text-base" />
                  <span className="font-modern text-xs sm:text-sm md:text-base">Genuine Parts</span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <FiCheckCircle className="text-red-500 text-sm sm:text-base" />
                  <span className="font-modern text-xs sm:text-sm md:text-base">Advanced Equipment</span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <FiCheckCircle className="text-red-500 text-sm sm:text-base" />
                  <span className="font-modern text-xs sm:text-sm md:text-base">Quick Turnaround</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 sm:top-20 right-10 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-4 h-4 sm:w-6 sm:h-6 border-2 border-red-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default ServicesStats;