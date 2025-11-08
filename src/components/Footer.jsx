import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiInstagram, FiMail, FiFacebook, FiTwitter, FiYoutube, FiPhone } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    {
      icon: FiInstagram,
      href: "https://instagram.com/fixinmoto",
      label: "@fixinmoto"
    },
    {
      icon: FiFacebook,
      href: "https://facebook.com/fixinmoto",
      label: "Facebook"
    },
    {
      icon: FiTwitter,
      href: "https://twitter.com/fixinmoto",
      label: "Twitter"
    },
    {
      icon: FiYoutube,
      href: "https://youtube.com/fixinmoto",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-red-500/20 relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-tech font-black text-white">
                Fixin<span className="text-red-500">Moto</span>
              </h2>
              <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-red-500 mt-1 sm:mt-2"></div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <FiMapPin className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <div>
                <p className="text-gray-300 font-modern text-sm sm:text-base">
                  Miyapur Main Road
                  <br />
                  Telangana 500049
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <FiPhone className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <div>
                <p className="text-gray-300 font-modern text-sm sm:text-base">
                  +91 9876543210
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
              <FiClock className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <div>
                <p className="text-gray-300 font-modern text-sm sm:text-base">
                  <span className="font-semibold text-white">Mon-Fri:</span>{" "}
                  03:00 - 23:00
                  <br />
                  <span className="font-semibold text-white">Sat-Sun:</span>{" "}
                  10:00 - 16:00
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-industrial font-semibold text-base sm:text-lg">Follow Us</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="text-gray-300 group-hover:text-red-500 transition-colors duration-300 text-sm sm:text-base" />
                      <span className="text-gray-300 group-hover:text-white font-modern text-xs sm:text-sm">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Email */}
              <motion.a
                href="mailto:contact@fixinmoto.com"
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="text-gray-300 group-hover:text-red-500 transition-colors duration-300 text-sm sm:text-base" />
                <span className="text-gray-300 group-hover:text-white font-modern text-xs sm:text-sm">
                  contact@fixinmoto.com
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-industrial font-bold text-white mb-4 sm:mb-6">About Us</h3>
            <p className="text-gray-300 font-modern leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Your trusted automotive service center providing expert car and
              bike repairs with precision and care.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-gray-400 font-modern text-xs sm:text-sm">Expert Technicians</p>
              <p className="text-gray-400 font-modern text-xs sm:text-sm">Quality Service</p>
              <p className="text-gray-400 font-modern text-xs sm:text-sm">Customer Satisfaction</p>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-industrial font-bold text-white mb-4 sm:mb-6">Why Choose Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 font-modern text-sm sm:text-base">Skilled Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 font-modern text-sm sm:text-base">Premium Quality Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 font-modern text-sm sm:text-base">Quick Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 font-modern text-sm sm:text-base">12-Month Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 font-modern text-sm sm:text-base">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <p className="text-gray-400 font-modern text-xs sm:text-sm text-center sm:text-left">
              Copyright © {currentYear} FixinMoto. All rights reserved.
            </p>

            {/* Quick Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-modern"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-modern"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-modern"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;