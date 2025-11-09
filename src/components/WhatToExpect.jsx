import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiTool, FiCheckCircle, FiThumbsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const WhatToExpect = () => {
  const expectations = [
    {
      icon: FiCalendar,
      title: "Book Your Appointment",
      description:
        "Schedule your appointment with ease. Choose your preferred time and get your vehicle in top shape—we'll handle the rest.",
    },
    {
      icon: FiTool,
      title: "Vehicle Check-In",
      description:
        "Quick and easy vehicle check-in process. We work with all types of vehicles—from bikes to cars and everything in between.",
    },
    {
      icon: FiCheckCircle,
      title: "Approval & Repairs",
      description:
        "Get instant approval for repairs. Once we assess your vehicle, we confirm what's needed and get started immediately.",
    },
    {
      icon: FiThumbsUp,
      title: "Drive Away Confidently",
      description:
        "Drive away with confidence. After our expert repairs, your vehicle is ready to hit the road safely and smoothly.",
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedExpectations = [
    ...expectations,
    ...expectations,
    ...expectations,
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-tech font-black text-white mb-6">
            What to Expect with{" "}
            <span className="text-red-500">DetailXMechanic</span>
          </h2>
          <p className="text-xl font-modern text-gray-300 max-w-3xl mx-auto">
            Premium detailing. Expert repairs. Hassle-free service
          </p>
        </motion.div>

        {/* Infinite Horizontal Scroll Carousel for ALL screens */}
        <div className="relative overflow-hidden py-8">
          {/* Main Infinite Scroll Container */}
          <motion.div
            className="flex"
            animate={{
              x: [0, -1920], // Adjust based on total width of duplicated content
            }}
            transition={{
              duration: 40, // Slower for better visibility
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedExpectations.map((expectation, index) => {
              const IconComponent = expectation.icon;
              return (
                <motion.div
                  key={`${expectation.title}-${index}`}
                  className="flex-shrink-0 mx-4"
                  style={{
                    width: "calc(25% - 32px)", // 4 cards per row on desktop
                    minWidth: "280px", // Minimum width for mobile
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 h-full group">
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Icon Container */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                        <IconComponent className="text-white text-xl" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-industrial font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {expectation.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 font-modern text-sm leading-relaxed flex-grow">
                        {expectation.description}
                      </p>

                      {/* Step Indicator */}
                      <div className="mt-4 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-industrial text-xs font-bold border border-red-500/30">
                        {(index % expectations.length) + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:flex justify-center mt-12 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
          {expectations.map((_, index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full bg-red-500 mx-16 relative z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <Link to="/booknow">
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-industrial font-bold text-lg transition-all duration-300 shadow-lg shadow-red-500/20 relative overflow-hidden group text-sm md:text-[16px]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px -10px rgba(220, 38, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book Your Appointment Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <p className="text-gray-400 font-modern mt-4 text-sm">
              No hidden fees • Free initial inspection • 12-month warranty
            </p>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default WhatToExpect;
