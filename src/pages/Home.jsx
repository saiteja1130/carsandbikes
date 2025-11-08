import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgCar from "../../assets/homeBanner.jpg";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatToExpect from "../components/WhatToExpect";
import GetInTouch from "../components/GetInTouch";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
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

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`, }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        </div>

        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-red-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-32 left-20 w-6 h-6 border-2 border-red-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="container mx-auto px-4 md:px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
            style={{ y }}
          >
            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-tech font-black text-white leading-tight mb-6"
            >
              Drive{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-tech"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Confidently
              </motion.span>
            </motion.h1>

            <motion.div
              variants={textVariants}
              className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="w-1 h-12 bg-red-500 hidden lg:block"></div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-tech font-bold text-white">
                with <span className="text-red-500">FixinMoto</span>
              </h2>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="text-lg sm:text-xl md:text-2xl font-modern text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              Your car deserves the{" "}
              <span className="text-red-400 font-semibold">best care</span> —
              precision, speed & reliability. Book your appointment today!
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial font-bold text-lg rounded-xl overflow-hidden group"
              >
                <span className="relative z-10">Appointment Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-12 py-4 border-2 border-red-600 text-white font-industrial font-bold text-lg rounded-xl hover:bg-red-600 transition-colors duration-300"
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-red-500 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <ServicesSection />
      </motion.div>

      {/* What to Expect Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <WhatToExpect />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <WhyChooseUs />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <GetInTouch />
      </motion.div>
    </div>
  );
};

export default Home;
