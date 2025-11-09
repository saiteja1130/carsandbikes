import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiCheckSquare,
} from "react-icons/fi";

// --- Icon Components (unchanged) ---
const BikeIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18V6M12 18H6M12 18h6M4 12h16"
    />
  </svg>
);

const CarIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

// --- Main Component ---
const BookNowForm = () => {
  // Use an array to store multiple selected services
  const [vehicleType, setVehicleType] = useState("car");
  const [selectedServices, setSelectedServices] = useState([]); // Changed from single string to array
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleName: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (service) => {
    setSelectedServices(
      (prevServices) =>
        prevServices.includes(service)
          ? prevServices.filter((s) => s !== service) // Deselect
          : [...prevServices, service] // Select
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const sendData = new FormData();
    sendData.append("formType", "booking");
    sendData.append("name", formData.name);
    sendData.append("phone", formData.phone);
    sendData.append("vehicle", formData.vehicleName);
    sendData.append("location", formData.location);
    sendData.append("vehicleType", vehicleType);
    // Send selected services as a comma-separated string
    sendData.append("services", selectedServices.join(" | "));

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
        alert(
          "✅ Booking sent successfully! Selected Services: " +
            selectedServices.join(", ")
        );
        setFormData({
          name: "",
          phone: "",
          vehicleName: "",
          location: "",
        });
        setSelectedServices([]);
      } else {
        alert("❌ Failed to send booking.");
      }
    } catch (error) {
      alert("❌ Network error. Please try again.");
    }
  };

  const servicesData = {
    car: [
      {
        category: "Car Mechanical Services & Works",
        services: [
          "Complete engine repair & tuning",
          "Clutch, brake & suspension works",
          "Gearbox service & replacement",
          "Oil change & filter replacement",
          "Electrical wiring & sensor diagnostics",
          "Battery check & replacement",
          "Cooling system & radiator service",
          "Steering & wheel alignment",
          "AC gas refilling & AC system repair",
          "Fuel injector & throttle body cleaning",
          "Timing belt & chain replacement",
          "Noise & vibration issue diagnosis",
          "Underbody inspection & protection coating",
          "Rat repellent & rust coating",
          "LED & high-illumination headlight installation",
          "Car detailing, interior cleaning & polishing",
          "Complete car restoration & performance upgrades",
        ],
      },
      {
        category: "Car Interior Accessories & Works",
        services: [
          "Ambient light setup (single & multi-color)",
          "Star roof lighting installation",
          "Dashboard wrapping & interior styling",
          "Premium seat cover & leather upholstery",
          "Roof liner replacement & cleaning",
          "Steering cover & custom wrapping",
          "Floor lamination & 7D/9D mat fitting",
          "Door pad restoration & leather finishing",
          "Interior detailing & deep cleaning",
          "Sound damping & noise cancellation works",
          "Android touchscreen music system",
          "Reverse camera & parking sensor fitting",
          "Premium speaker & woofer installation",
          "Armrest installation & cup holder setup",
          "LED foot lights & mood lighting",
          "Sunshade & window curtain fitting",
          "Perfume diffuser & interior accessories setup",
          "Custom interior modification & theme design",
          "Side foot step installation (SUV & MUVs)",
        ],
      },
      {
        category: "Car Detailing & Restoration Services",
        services: [
          "Full body foam wash & deep cleaning",
          "Exterior polishing & gloss enhancement",
          "Interior deep cleaning & vacuuming",
          "Dashboard, roof & seat restoration",
          "Ceramic coating",
          "Graphene coating (deep gloss & slickness)",
          "Matte & gloss PPF installation (8-year warranty)",
          "Headlight & taillight restoration",
          "Underbody rust coating & protection",
          "Engine bay cleaning & shine treatment",
          "Plastic & rubber parts restoration",
          "Paint correction & scratch removal",
          "Full body denting & painting works",
          "Alloy wheel cleaning & painting",
          "Noise cancellation damping work",
          "Car interior & exterior customization",
          "Full car restoration to showroom finish",
        ],
      },
    ],
    bike: [
      {
        category: "Bike Mechanical Services",
        services: [
          "Complete engine repair & tuning",
          "Clutch & brake overhaul",
          "Oil change & filter replacement",
          "Chain & sprocket replacement",
          "Suspension repair & setup",
          "Carburetor & fuel injection cleaning",
          "Battery check & replacement",
          "Electrical wiring & lighting works",
          "Wheel alignment & balancing",
          "Gearbox repair & maintenance",
          "Cooling system check-up",
          "Tyre replacement & puncture repair",
          "Noise & vibration issue diagnosis",
          "Full bike restoration & repainting",
        ],
      },
      {
        category: "Bike Restoration Services",
        services: [
          "Complete engine restoration & tuning",
          "Full-body repainting & denting work",
          "Chassis cleaning, repair & coating",
          "Rust removal & anti-rust protection",
          "Electrical wiring restoration",
          "Suspension & brake system rebuild",
          "Carburetor & fuel system cleaning",
          "Clutch, gear & bearing replacement",
          "Seat & interior re-upholstery",
          "Alloy & wheel restoration",
          "Headlight & indicator replacement",
          "Chrome part polishing & renewal",
          "Custom paint & graphic designs",
          "Matte / Gloss PPF & ceramic coating",
          "Final detailing & finishing touches",
        ],
      },
      {
        category: "Bike Detailing Services",
        services: [
          "Full-body foam wash & deep cleaning",
          "Premium polishing & gloss enhancement",
          "Ceramic coating",
          "Matte & gloss PPF installation",
          "Chain cleaning & lubrication",
          "Engine bay cleaning & shine treatment",
          "Plastic & rubber part restoration",
          "Headlight & taillight restoration",
          "Rust removal & metal protection",
          "Underbody wash & protection coat",
          "Water spot & swirl mark removal",
          "Paint correction & scratch removal",
          "Interior panel & seat cleaning",
          "Bike waxing & UV protection",
          "Chrome parts polishing & shine restore",
        ],
      },
    ],
  };

  // Updated responsive classes
  const submitButtonClass =
    "w-full mt-6 sm:mt-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-base sm:text-lg rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-500/20 relative overflow-hidden group font-industrial-600";
  const inputClass =
    "w-full p-3 sm:p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 font-modern-400 text-sm sm:text-base";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-industrial">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-tech-700">
            Book Your <span className="text-red-500">Service</span> 🛠️
          </h2>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-300 font-modern-500">
            Select multiple services for your vehicle
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-red-500/20 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Vehicle Type Selection */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-gray-700/50 rounded-2xl p-2 border border-gray-600">
              <div className="flex gap-2">
                {[
                  { type: "car", label: "Car", icon: CarIcon },
                  { type: "bike", label: "Bike", icon: BikeIcon },
                ].map((vehicle) => {
                  const IconComponent = vehicle.icon;
                  return (
                    <motion.button
                      key={vehicle.type}
                      type="button"
                      onClick={() => {
                        setVehicleType(vehicle.type);
                        setSelectedServices([]); // Clear services on vehicle type change
                      }}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 font-modern-600 text-sm sm:text-base ${
                        vehicleType === vehicle.type
                          ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                          : "text-gray-300 hover:text-white hover:bg-gray-600/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="text-base sm:text-lg" />
                      {vehicle.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Grid (Personal Info) */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-white font-semibold flex items-center gap-2 font-modern-600 text-sm sm:text-base">
                  <FiUser className="text-red-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-white font-semibold flex items-center gap-2 font-modern-600 text-sm sm:text-base">
                  <FiPhone className="text-red-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Vehicle Name & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Vehicle Name */}
              <div className="space-y-2">
                <label className="text-white font-semibold flex items-center gap-2 font-modern-600 text-sm sm:text-base">
                  {vehicleType === "car" ? <CarIcon /> : <BikeIcon />}
                  Vehicle Name & Model
                </label>
                <input
                  type="text"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleChange}
                  placeholder={
                    vehicleType === "car"
                      ? "e.g., Honda City"
                      : "e.g., Yamaha R15"
                  }
                  required
                  className={inputClass}
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-white font-semibold flex items-center gap-2 font-modern-600 text-sm sm:text-base">
                  <FiMapPin className="text-red-500" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  required
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Service Checkbox Selection (New Section) */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 mb-3 sm:mb-4 border-b border-red-500/50 pb-2 font-tech-600">
              <FiCheckSquare className="text-red-500" /> Select Services
            </h3>

            <div className="space-y-4 sm:space-y-6 max-h-80 sm:max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {servicesData[vehicleType].map((categoryItem, catIdx) => (
                <div key={catIdx}>
                  <h4 className="text-base sm:text-lg font-semibold text-red-400 mb-2 sm:mb-3 sticky top-0 bg-gray-800/80 backdrop-blur-sm z-10 p-2 -mx-2 rounded-lg font-modern-600">
                    {categoryItem.category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {categoryItem.services.map((service, srvIdx) => (
                      <label
                        key={srvIdx}
                        className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer font-modern-400 text-xs sm:text-sm ${
                          selectedServices.includes(service)
                            ? "bg-red-600/20 border-red-500 text-white shadow-md shadow-red-500/10"
                            : "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50 hover:border-red-500/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="hidden"
                        />
                        <div
                          className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center border-2 rounded-md transition-colors duration-200 flex-shrink-0"
                          style={{
                            borderColor: selectedServices.includes(service)
                              ? "#ef4444"
                              : "#6b7280",
                            backgroundColor: selectedServices.includes(service)
                              ? "#ef4444"
                              : "transparent",
                          }}
                        >
                          {selectedServices.includes(service) && (
                            <FiCheckSquare className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                          )}
                        </div>
                        <span className="leading-tight">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <style jsx global>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #374151;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #ef4444;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #dc2626;
              }
            `}</style>

            <p className="text-xs sm:text-sm text-center text-gray-400 mt-3 sm:mt-4 font-modern-400">
              You have selected <strong>{selectedServices.length}</strong>{" "}
              service(s).
            </p>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={submitButtonClass}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 15px 40px -10px rgba(220, 38, 38, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FiCalendar className="text-base sm:text-lg" />
              Book Service Now
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Additional Info */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-700/30 rounded-xl border border-gray-600">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 font-modern-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Free Pickup</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Expert Service</span>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default BookNowForm;
