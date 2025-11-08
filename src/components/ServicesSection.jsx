import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export const servicesData = {
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

/* --------------------
   Detailed SVG icons - WHITE COLOR - **REDUCED DEFAULT SIZES**
   -------------------- */
// NOTE: I've kept the default sizes large but will rely on the passed-in props (w-12, w-24, w-30, etc.) for responsive sizing.
const SvgEngine = ({ className = "", style = {}, width = 76, height = 76 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="6"
      y="18"
      width="52"
      height="28"
      rx="4"
      stroke="none"
      fill="rgba(255,255,255,0.9)"
    />
    <path
      d="M10 30h44"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="20" cy="30" r="3" fill="rgba(255,255,255,0.7)" />
    <circle cx="44" cy="30" r="3" fill="rgba(255,255,255,0.7)" />
  </svg>
);

const SvgWrench = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M48 12L38 22"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M36 24c-4 4-10 6-16 6s-8 2-8 6 2 8 6 8 6-2 6-6 2-8 6-8 8-2 12-6 8-8 8-8-6 0-8 0z"
      fill="rgba(255,255,255,0.9)"
    />
  </svg>
);

const SvgOil = ({ className = "", style = {}, width = 68, height = 68 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M32 8c-6 8-12 12-12 20 0 8 6 14 12 14s12-6 12-14c0-8-6-12-12-20z"
      fill="rgba(255,255,255,0.9)"
    />
    <rect
      x="26"
      y="36"
      width="12"
      height="12"
      rx="2"
      fill="rgba(255,255,255,0.7)"
    />
  </svg>
);

const SvgBattery = ({
  className = "",
  style = {},
  width = 64,
  height = 64,
}) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="10"
      y="18"
      width="44"
      height="28"
      rx="3"
      fill="rgba(255,255,255,0.9)"
    />
    <rect
      x="54"
      y="26"
      width="4"
      height="12"
      rx="1"
      fill="rgba(255,255,255,0.8)"
    />
    <path d="M18 34h12v6H18z" fill="rgba(255,255,255,0.7)" />
  </svg>
);

const SvgTyre = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="32" cy="32" r="18" fill="rgba(255,255,255,0.7)" />
    <circle cx="32" cy="32" r="8" fill="rgba(255,255,255,0.9)" />
  </svg>
);

const SvgAC = ({ className = "", style = {}, width = 68, height = 68 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="14"
      y="20"
      width="36"
      height="24"
      rx="3"
      fill="rgba(255,255,255,0.7)"
    />
    <path
      d="M20 32h24"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SvgDetail = ({ className = "", style = {}, width = 76, height = 76 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="32" cy="32" r="18" fill="rgba(255,255,255,0.6)" />
    <path
      d="M24 28h16M24 36h10"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SvgPaint = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M16 44c0-10 24-24 32-28 0 0 0 12-8 20s-24 12-24 8z"
      fill="rgba(255,255,255,0.9)"
    />
    <rect
      x="10"
      y="48"
      width="44"
      height="6"
      rx="2"
      fill="rgba(255,255,255,0.7)"
    />
  </svg>
);

const SvgChain = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    width={width}
    height={height}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M18 32c4-6 10-8 16-8s12 4 16 8"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="18" cy="32" r="3" fill="rgba(255,255,255,0.7)" />
    <circle cx="46" cy="32" r="3" fill="rgba(255,255,255,0.7)" />
  </svg>
);

const SvgDiag = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    width={width}
    height={height}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="12"
      y="16"
      width="40"
      height="32"
      rx="3"
      fill="rgba(255,255,255,0.6)"
    />
    <path
      d="M20 26h24M20 36h12"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SvgLighting = ({
  className = "",
  style = {},
  width = 72,
  height = 72,
}) => (
  <svg
    viewBox="0 0 64 64"
    width={width}
    height={height}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M32 8L20 32h12v16l12-24H32V8z" fill="rgba(255,255,255,0.9)" />
  </svg>
);

const SvgMusic = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    width={width}
    height={height}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M24 16v32a8 8 0 1 0 8 8V28l16-4v16a8 8 0 1 0 8 8V16L24 16z"
      fill="rgba(255,255,255,0.9)"
    />
  </svg>
);

const SvgCamera = ({ className = "", style = {}, width = 72, height = 72 }) => (
  <svg
    viewBox="0 0 64 64"
    width={width}
    height={height}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="12"
      y="20"
      width="40"
      height="24"
      rx="4"
      fill="rgba(255,255,255,0.7)"
    />
    <circle cx="40" cy="28" r="4" fill="rgba(255,255,255,0.9)" />
    <path d="M24 36h16v4H24z" fill="rgba(255,255,255,0.8)" />
  </svg>
);

const SvgFallback = ({
  className = "",
  style = {},
  width = 72,
  height = 72,
}) => (
  <svg
    viewBox="0 0 64 64"
    width={width}
    height={height}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="8"
      y="16"
      width="48"
      height="32"
      rx="6"
      fill="rgba(255,255,255,0.6)"
    />
    <circle cx="32" cy="32" r="8" fill="rgba(255,255,255,0.9)" />
  </svg>
);

/* --------------------
   Icon selection helper
   -------------------- */
function getIconForService(serviceTitle) {
  const s = serviceTitle.toLowerCase();

  if (/(engine|tuning|restoration)/.test(s)) return <SvgEngine />;
  if (/(clutch|brake|suspension|overhaul)/.test(s)) return <SvgWrench />;
  if (/(gearbox|gear|transmission)/.test(s)) return <SvgWrench />;
  if (/(oil|filter|lubric)/.test(s)) return <SvgOil />;
  if (/(battery|charge|electrical)/.test(s)) return <SvgBattery />;
  if (/(tyre|tire|wheel|puncture|balanc|alignment)/.test(s)) return <SvgTyre />;
  if (/(ac|gas refill|air con|air-condition)/.test(s)) return <SvgAC />;
  if (/(detailing|polish|ceramic|coat|wax|ppf)/.test(s)) return <SvgDetail />;
  if (/(paint|repaint|denting|painting)/.test(s)) return <SvgPaint />;
  if (/(chain|sprocket)/.test(s)) return <SvgChain />;
  if (/(injector|throttle|fuel|carburetor)/.test(s)) return <SvgDiag />;
  if (/(timing belt|timing|belt)/.test(s)) return <SvgDiag />;
  if (/(diagnos|sensor|noise|vibration)/.test(s)) return <SvgDiag />;
  if (/(light|led|illumination|ambient|mood)/.test(s)) return <SvgLighting />;
  if (/(music|speaker|woofer|sound)/.test(s)) return <SvgMusic />;
  if (/(camera|sensor|parking)/.test(s)) return <SvgCamera />;
  if (/(interior|dashboard|seat|steering|upholstery)/.test(s))
    return <SvgDetail />;
  // fallback
  return <SvgFallback />;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("car");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(0);
  // NEW STATE: Control the number of cards shown based on screen size
  const [maxServicesToShow, setMaxServicesToShow] = useState(8); 
  const navigate = useNavigate();

  const activeGroups = servicesData[activeTab];

  // 1. 🛠️ useEffect for Responsive Card Limit
  useEffect(() => {
    // Function to update the maximum number of services to show
    const updateMaxServices = () => {
      // Set to 4 for screens smaller than the 'sm' breakpoint (640px), otherwise 8
      setMaxServicesToShow(window.innerWidth < 640 ? 4 : 8); 
    };

    // Initial check
    updateMaxServices();

    // Event listener for window resize
    window.addEventListener("resize", updateMaxServices);

    // Cleanup function
    return () => window.removeEventListener("resize", updateMaxServices);
  }, []); // Run only once on mount to set up the listener


  // Get current category services and limit to 4/8 based on maxServicesToShow
  const currentServices = activeGroups[selectedCategory]?.services
    .map((service) => ({
      category: activeGroups[selectedCategory].category,
      title: service,
    }))
    // 2. 🎯 Use maxServicesToShow for the slice limit
    .slice(0, maxServicesToShow); 

  // Check if there are more services available (compares to the responsive limit)
  const hasMoreServices = activeGroups[selectedCategory]?.services.length > maxServicesToShow;

  // Section entrance animation
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
      },
    },
  };

  // Staggered animations for children - FASTER
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const tabVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const categoryTabVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Function to handle View More click
  const handleViewMore = () => {
    // Navigate to all services page with current category info
    navigate("/services", {
      state: {
        activeTab,
        selectedCategory,
        categoryName: activeGroups[selectedCategory]?.category,
      },
    });
  };

  return (
    <motion.section
      className="w-full bg-black py-20 md:py-32 relative overflow-hidden" // **UPDATED: py-20 for mobile, py-32 for md+**
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-black to-black"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10"> {/* **UPDATED: px-4 for small screens** */}
        {/* Section Header - Title and Subtitle */}
        <motion.div variants={tabVariants} className="text-center mb-16 md:mb-20"> {/* **UPDATED: mb-16 for tighter spacing on mobile** */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-tech font-black text-white mb-4 md:mb-6" // **UPDATED: Responsive font size**
            variants={tabVariants}
          >
            Our <span className="text-red-500">Services</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg font-modern text-gray-400 max-w-2xl mx-auto" // **UPDATED: Responsive font size**
            variants={tabVariants}
          >
            Premium automotive care with cutting-edge technology and expert
            craftsmanship
          </motion.p>
        </motion.div>

        {/* Main Tab Navigation - Car/Bike */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12" // **UPDATED: Reduced margin on mobile**
          variants={tabVariants}
        >
          <div className="inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-2 bg-black/50 border border-red-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm"> {/* **UPDATED: smaller gap/padding on mobile** */}
            {["car", "bike"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedCategory(0);
                }}
                className={`relative px-4 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl font-industrial font-bold text-sm sm:text-sm uppercase tracking-wider transition-all duration-300 ${ // **UPDATED: smaller padding/font on mobile**
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg sm:rounded-xl" // **UPDATED: rounded size**
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "car" ? "Car Services" : "Bike Services"}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <AnimatePresence mode="wait">
          {activeGroups?.length > 0 && (
            <motion.div
              key={`categories-${activeTab}`}
              className="flex justify-center mb-8 md:mb-12 flex-wrap gap-2 md:gap-4" // **UPDATED: smaller gap on mobile**
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.4 }}
            >
              {activeGroups.map((group, index) => (
                <motion.button
                  key={`${activeTab}-${index}`}
                  variants={categoryTabVariants}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-industrial font-semibold text-sm sm:text-base transition-all duration-300 min-w-[150px] sm:min-w-[200px] text-center ${ // **UPDATED: smaller padding/font/min-width on mobile**
                    selectedCategory === index
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-500/30" // **UPDATED: reduced shadow intensity**
                      : "bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      selectedCategory !== index
                        ? "0 10px 30px -10px rgba(220, 38, 38, 0.3)"
                        : "none",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Clean up category label for tab: show first two words or full category if shorter */}
                  {group.category.split(" ").slice(0, 2).join(" ") + (group.category.split(" ").length > 2 ? '...' : '')}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services Grid - Limited to 4 on mobile, 8 on desktop */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6" // **UPDATED: grid layout for small screens, gap sizing**
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {currentServices.map((service, index) => {
              const icon = getIconForService(service.title);

              return (
                <motion.div
                  key={`${activeTab}-${service.title}-${index}`}
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{
                    y: -6, // **UPDATED: slightly less lift**
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group cursor-pointer serviceCard"
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-0"></div> {/* **UPDATED: rounded size** */}

                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800 group-hover:border-red-500/50 transition-all duration-300 h-full overflow-hidden"> {/* **UPDATED: padding/rounded size** */}
                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Animated Background Icon */}
                    <motion.div
                      className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500" // **UPDATED: icon position**
                      animate={{
                        rotate: hoveredCard === index ? 5 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* **UPDATED: Responsive Icon Size** */}
                      {React.cloneElement(icon, { width: 100, height: 100 })} 
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-4"> {/* **UPDATED: smaller gap/margin on mobile** */}
                        <motion.div
                          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-500/20" // **UPDATED: icon container size/rounded**
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* White icon on red background */}
                          {/* **UPDATED: Responsive Icon Size** */}
                          {React.cloneElement(icon, {
                            width: 20, // 20px on mobile
                            height: 20,
                            className: "sm:w-6 sm:h-6" // 24px on sm+
                          })}
                        </motion.div>

                        <motion.h3
                          className="text-white font-modern font-bold text-base sm:text-lg leading-snug flex-1 pt-0.5" // **UPDATED: Responsive font size**
                          initial={false}
                          animate={{
                            color:
                              hoveredCard === index ? "#fecaca" : "#ffffff",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.title}
                        </motion.h3>
                      </div>

                      <motion.span
                        className="text-red-400 font-industrial text-2xs sm:text-xs font-semibold tracking-wider uppercase block mt-1 sm:mt-2" // **UPDATED: Responsive font size**
                        initial={false}
                        animate={{
                          color: hoveredCard === index ? "#f87171" : "#f87171",
                        }}
                      >
                        {service.category}
                      </motion.span>

                      {/* Hover Arrow */}
                      <motion.div
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-red-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" // **UPDATED: arrow position**
                        initial={false}
                        animate={{
                          opacity: hoveredCard === index ? 1 : 0,
                          x: hoveredCard === index ? 0 : 8,
                        }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More Button - Only show if there are more services */}
        {hasMoreServices && (
          <motion.div className="text-center mt-8 md:mt-12" variants={tabVariants}> {/* **UPDATED: margin** */}
            <motion.button
              onClick={handleViewMore}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-industrial text-sm sm:text-base font-bold rounded-xl border border-red-500/30 relative overflow-hidden group" // **UPDATED: padding/font size**
            >
              <span className="relative z-10">VIEW MORE SERVICES</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div className="text-center mt-6 md:mt-8" variants={tabVariants}> {/* **UPDATED: margin** */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-transparent text-white font-industrial text-sm sm:text-base font-bold rounded-xl border-2 border-red-500 hover:bg-red-500 transition-all duration-300" // **UPDATED: padding/font size**
          >
            <span className="relative z-10 buttonText">BOOK APPOINTMENT</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;