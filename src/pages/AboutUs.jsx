import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiAward,
  FiUsers,
  FiTool,
  FiShield,
  FiStar,
} from "react-icons/fi";

const AboutUs = () => {
  const branchInfo = {
    name: "Miyapur Branch",
    address: "Miyapur Main Road, Telangana 500049",
    phone: "+91 93923 38987",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    email: "detailxmechanicc@gmail.com",
  };

  const features = [
    {
      icon: <FiAward className="text-2xl sm:text-3xl" />,
      title: "Skilled Technicians",
      description: "Certified professionals with years of experience",
    },
    {
      icon: <FiTool className="text-2xl sm:text-3xl" />,
      title: "Modern Technology",
      description: "Latest tools and equipment for precision work",
    },
    {
      icon: <FiShield className="text-2xl sm:text-3xl" />,
      title: "Premium Products",
      description: "High-quality detailing and repair materials",
    },
    {
      icon: <FiStar className="text-2xl sm:text-3xl" />,
      title: "Quality Guarantee",
      description: "12-month warranty on all services",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "5★", label: "Rated Service" },
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-tech font-black text-white mb-4 sm:mb-6">
              About <span className="text-red-500">DetailXMechanic</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-modern text-gray-300 leading-relaxed">
              Your trusted destination for premium car detailing and expert bike
              repair services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Content */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tech font-black text-white mb-4 sm:mb-6">
                  Welcome to <span className="text-red-500">DetailXMechanic</span>
                </h2>
                <p className="text-base sm:text-lg font-modern text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  We're passionate about delivering precision, care, and
                  perfection — one vehicle at a time.
                </p>
                <p className="text-base sm:text-lg font-modern text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  At DetailXMechanic, we combine advanced technology, high-quality
                  products, and skilled craftsmanship to give your car or bike a
                  fresh, flawless finish inside and out. From deep-clean
                  detailing and ceramic coating to engine tune-ups and
                  performance upgrades, every service we offer is designed to
                  enhance your vehicle's appearance, protection, and
                  performance.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-red-500/20 flex-1 min-w-[120px]"
                    >
                      <div className="text-xl sm:text-2xl font-tech font-bold text-red-500">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-modern text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Mission & Vision */}
              <motion.div
                variants={itemVariants}
                className="space-y-6 sm:space-y-8"
              >
                {/* Mission */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-red-500/20">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <FiAward className="text-red-500 text-xl sm:text-2xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-industrial font-bold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 font-modern leading-relaxed">
                    To redefine vehicle care by providing exceptional detailing
                    and repair services that exceed customer expectations,
                    ensuring every ride looks stunning and runs smoothly.
                  </p>
                </div>

                {/* Vision */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-red-500/20">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <FiUsers className="text-red-500 text-xl sm:text-2xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-industrial font-bold text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 font-modern leading-relaxed">
                    To become the most trusted name in auto detailing and
                    two-wheeler repair, known for innovation, reliability, and
                    unmatched service quality.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-800/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tech font-black text-white mb-4 sm:mb-6">
              Why Choose <span className="text-red-500">DetailXMechanic</span>
            </h2>
            <p className="text-lg sm:text-xl font-modern text-gray-300 max-w-2xl mx-auto px-4">
              We're committed to delivering exceptional service with unmatched
              quality
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-red-500/20 text-center group hover:border-red-500/40 transition-all duration-300"
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-red-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-industrial font-bold text-white mb-2 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-modern text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Benefits */}
          <motion.div
            className="max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-red-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-industrial font-bold text-white text-center mb-4 sm:mb-6">
              Our Commitment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-gray-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <FiStar className="text-red-500 flex-shrink-0 text-sm sm:text-base" />
                <span className="font-modern text-sm sm:text-base">
                  Transparent pricing with no hidden costs
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <FiStar className="text-red-500 flex-shrink-0 text-sm sm:text-base" />
                <span className="font-modern text-sm sm:text-base">
                  Customer satisfaction guaranteed
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <FiStar className="text-red-500 flex-shrink-0 text-sm sm:text-base" />
                <span className="font-modern text-sm sm:text-base">
                  Emergency services available 24/7
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <FiStar className="text-red-500 flex-shrink-0 text-sm sm:text-base" />
                <span className="font-modern text-sm sm:text-base">
                  Free consultation and estimates
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tech font-black text-white mb-6 sm:mb-8">
                Visit Our <span className="text-red-500">Workshop</span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-800/50 rounded-xl sm:rounded-2xl border border-red-500/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-red-500 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-industrial font-semibold text-base sm:text-lg">
                      Address
                    </h3>
                    <p className="text-gray-300 font-modern text-sm sm:text-base">
                      {branchInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-800/50 rounded-xl sm:rounded-2xl border border-red-500/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-red-500 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-industrial font-semibold text-base sm:text-lg">
                      Phone
                    </h3>
                    <p className="text-gray-300 font-modern text-sm sm:text-base">
                      {branchInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-800/50 rounded-xl sm:rounded-2xl border border-red-500/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-red-500 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-industrial font-semibold text-base sm:text-lg">
                      Working Hours
                    </h3>
                    <p className="text-gray-300 font-modern text-sm sm:text-base">
                      {branchInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Message */}
              <motion.div
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-red-500/10 rounded-xl sm:rounded-2xl border border-red-500/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 font-modern text-base sm:text-lg leading-relaxed">
                  At DetailXMechanic, we treat every vehicle like our own — with
                  precision, passion, and professionalism. Whether it's
                  restoring your car's showroom shine or keeping your bike
                  road-ready, we're here to make your ride stand out.
                </p>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden border border-red-500/20"
            >
              <div className="h-64 sm:h-72 md:h-80 lg:h-96">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.417389157716!2d78.34024167501906!3d17.516901380673937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9279676f8f1d%3A0x6d53fb3b4ed44f8a!2sMiyapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DetailXMechanic Miyapur Branch"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
