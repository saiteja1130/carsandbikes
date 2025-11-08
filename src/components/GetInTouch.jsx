import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiCalendar } from "react-icons/fi";

const GetInTouch = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Replace the background image URL with your actual image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          {/* Linear Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        </div>

        {/* Additional Pattern Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let's Get Your Vehicle
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600"
              initial={{ backgroundPosition: "0% 50%" }}
              whileInView={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              in Top Shape!
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to give your car the care it deserves?
            <br />
            Contact FixinMoto for a free consultation or to book a service
            appointment today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Book Appointment Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg rounded-xl overflow-hidden group min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FiCalendar className="text-xl" />
                Book Appointment
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Contact Us Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 border-2 border-red-600 text-white font-semibold text-lg rounded-xl hover:bg-red-600 transition-all duration-300 min-w-[200px] group"
            >
              <span className="flex items-center justify-center gap-3">
                <FiPhone className="text-xl group-hover:scale-110 transition-transform duration-300" />
                Contact Us
              </span>
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={textVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">Free</div>
              <div className="text-gray-300">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">Quick</div>
              <div className="text-gray-300">Response</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-red-500 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-6 h-6 border-2 border-red-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
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

export default GetInTouch;
