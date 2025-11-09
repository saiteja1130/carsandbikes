import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FiMenu, FiX, FiInfo, FiHome, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const menuItems = [
    { name: "Home", icon: FiHome, href: "" },
    { name: "About Us", icon: FiInfo, href: "about" },
    { name: "Services", icon: FiMenu, href: "services" },
    { name: "Contact Now", icon: FiPhoneCall, href: "contact-us" },
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
        <Link to="/">
          <motion.div
            className="text-white font-tech font-black text-2xl sm:text-3xl relative group cursor-pointer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">DetailXMechanic</span>       
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
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </motion.div>
        </Link>
        <LayoutGroup>
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
                layout
              >
                <Link to={`/${item.href}`}>
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group-hover:bg-red-500/10 group-hover:text-red-400"
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                                        <item.icon className="text-lg" />       
                                <span>{item.name}</span>                 
                  </motion.div>
                </Link>
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
        </LayoutGroup>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center gap-8 text-2xl font-semibold z-40 h-[100vh] font-modern"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-500/20 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-red-500/10 to-transparent"></div>
            </div>
            <motion.ul className="flex flex-col items-center gap-6 relative z-10">
              {menuItems.map((item, index) => (
                <Link to={`/${item.href}`}>
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
                </Link>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
