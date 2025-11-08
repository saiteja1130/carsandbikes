import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiUser, FiCalendar, FiInfo } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { name: "About Us", icon: FiInfo, href: "#about" },
    { name: "Appointment", icon: FiCalendar, href: "#appointment" },
    { name: "Services", icon: FiMenu, href: "#services" },
  ];

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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -50 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full top-0 left-0 z-50 py-3 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-black/95 backdrop-blur-lg shadow-2xl shadow-red-500/10 border-b border-red-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo with Animation - Using tech font */}
        <motion.div
          className="text-white font-tech font-black text-2xl sm:text-3xl relative group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">FixinMoto</span>
          <motion.span
            className="text-red-500 ml-1"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            .
          </motion.span>
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
          />
        </motion.div>

        {/* Desktop Menu - Using modern font */}
        <motion.ul
          className="hidden md:flex gap-4 text-white font-modern font-medium text-base lg:text-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={item.name}
              variants={itemVariants}
              className="relative cursor-pointer group"
              onMouseEnter={() => setActiveItem(item.name)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group-hover:bg-red-500/10 group-hover:text-red-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="text-lg" />
                <span>{item.name}</span>
              </motion.div>

              {/* Active indicator */}
              {activeItem === item.name && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  layoutId="activeIndicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Login Button (Desktop) - Using industrial font */}
        <motion.button
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-industrial font-semibold transition-all duration-300 shadow-lg shadow-red-500/20 relative overflow-hidden group"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -10px rgba(220, 38, 38, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FiUser className="text-lg" />
          <span className="relative z-10">Login</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Toggle - Using industrial font */}
        <motion.button
          className="md:hidden text-white text-2xl relative z-[100] w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all duration-300 font-industrial"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay - Using modern font */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center gap-8 text-2xl font-semibold z-40 h-[100vh] font-modern"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-500/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-red-500/10 to-transparent"></div>
            </div>

            {/* Menu Items */}
            <motion.ul className="flex flex-col items-center gap-6 relative z-10">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={mobileItemVariants}
                  className="cursor-pointer group"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-black/50 backdrop-blur-sm border border-red-500/20 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 min-w-[200px] text-center"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="text-red-500 text-xl" />
                    <span className="text-white group-hover:text-red-400 transition-colors duration-300">
                      {item.name}
                    </span>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile Login Button - Using industrial font */}
            <motion.button
              className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-2xl font-industrial font-semibold text-lg transition-all duration-300 shadow-lg shadow-red-500/30 relative overflow-hidden group mt-4"
              variants={mobileItemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px -10px rgba(220, 38, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
            >
              <FiUser className="text-xl" />
              <span className="relative z-10">Login</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Close Hint - Using modern font */}
            <motion.div
              className="absolute bottom-8 text-gray-400 text-sm font-modern"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap anywhere to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
