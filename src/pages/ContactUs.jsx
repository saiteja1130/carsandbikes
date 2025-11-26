import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const sendData = new FormData();
    sendData.append("formType", "contact");
    sendData.append("name", formData.name);
    sendData.append("email", formData.email);
    sendData.append("phone", formData.phone);
    sendData.append("subject", formData.subject);
    sendData.append("message", formData.message);

    try {
      const response = await fetch(
        "https://visualrisetechnologies.com/contact.php",
        {
          method: "POST",
          body: sendData,
        }
      );

      const result = await response.text();

      if (result.includes("success")) {
        alert("✅ Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("❌ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+91 93923 38987",
      description: "Mon-Sun: 8:00 AM - 8:00 PM",
      link: "tel:+919392338987",
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: "detailxmechanicc@gmail.com",
      description: "We'll respond quickly",
      link: "mailto:detailxmechanicc@gmail.com",
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: "Miyapur Main Road",
      description: "Telangana 500049",
      link: "https://maps.google.com/?q=Miyapur,Hyderabad",
    },
    {
      icon: FiClock,
      title: "Working Hours",
      details: "Mon-Sun: 8:00 AM - 8:00 PM",
      description: "Emergency: 24/7 Available",
      link: null,
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 font-industrial">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-tech-900 tracking-tight">
              Contact <span className="text-red-500">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-modern-400 leading-relaxed">
              Get in touch with our automotive experts. We're here to help with
              all your vehicle needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-tech-700">
                  Get In <span className="text-red-500">Touch</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-modern-400">
                  Have questions about our services? Need a quote for your
                  vehicle? Our team is ready to assist you with professional
                  automotive solutions.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                          <IconComponent className="text-red-500 text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg mb-1 font-modern-600">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg block mb-1 font-industrial-400"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-gray-300 text-lg mb-1 font-industrial-400">
                              {info.details}
                            </p>
                          )}
                          <p className="text-gray-400 text-sm font-modern-400">
                            {info.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Map Section */}
                <motion.div
                  className="mt-8 bg-gray-800/50 rounded-2xl overflow-hidden border border-red-500/20"
                  variants={itemVariants}
                >
                  <div className="h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.417389157716!2d78.34024167501906!3d17.516901380673937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9279676f8f1d%3A0x6d53fb3b4ed44f8a!2sMiyapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="DetailXMechanic Location"
                      className="filter grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6 font-tech-600">
                    Send Us a <span className="text-red-500">Message</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white font-semibold flex items-center gap-2 font-modern-600">
                          <FiUser className="text-red-500" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 font-industrial-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-white font-semibold flex items-center gap-2 font-modern-600">
                          <FiMail className="text-red-500" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 font-industrial-400"
                        />
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white font-semibold flex items-center gap-2 font-modern-600">
                          <FiPhone className="text-red-500" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99999999"
                          required
                          className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 font-industrial-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-white font-semibold font-modern-600">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 transition-all duration-300 font-industrial-400"
                        >
                          <option value="" className="text-gray-400">
                            Select a subject
                          </option>
                          <option
                            value="general"
                            className="text-white bg-gray-800"
                          >
                            General Inquiry
                          </option>
                          <option
                            value="service"
                            className="text-white bg-gray-800"
                          >
                            Service Booking
                          </option>
                          <option
                            value="quote"
                            className="text-white bg-gray-800"
                          >
                            Price Quote
                          </option>
                          <option
                            value="emergency"
                            className="text-white bg-gray-800"
                          >
                            Emergency Service
                          </option>
                          <option
                            value="other"
                            className="text-white bg-gray-800"
                          >
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-white font-semibold flex items-center gap-2 font-modern-600">
                        <FiMessageSquare className="text-red-500" />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your vehicle service needs..."
                        rows="5"
                        required
                        className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none font-industrial-400"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-500/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed font-modern-600"
                      whileHover={
                        !isSubmitting
                          ? {
                              scale: 1.02,
                              boxShadow:
                                "0 15px 40px -10px rgba(220, 38, 38, 0.4)",
                            }
                          : {}
                      }
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend className="text-lg" />
                            Send Message
                          </>
                        )}
                      </span>
                      {!isSubmitting && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  </form>
                </div>

                {/* Quick Response Info */}
                <motion.div
                  className="mt-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-600"
                  variants={itemVariants}
                >
                  <h4 className="text-white font-semibold mb-3 text-center font-tech-600">
                    Why Choose Us?
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-500 mb-1 font-tech-700">
                        24/7
                      </div>
                      <div className="text-gray-300 text-sm font-modern-400">
                        Support
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500 mb-1 font-tech-700">
                        Quick
                      </div>
                      <div className="text-gray-300 text-sm font-modern-400">
                        Response
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500 mb-1 font-tech-700">
                        Free
                      </div>
                      <div className="text-gray-300 text-sm font-modern-400">
                        Consultation
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500 mb-1 font-tech-700">
                        Expert
                      </div>
                      <div className="text-gray-300 text-sm font-modern-400">
                        Advice
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
