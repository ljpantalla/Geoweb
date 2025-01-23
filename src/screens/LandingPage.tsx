import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FaMapMarkedAlt,
  FaRoute,
  FaRegSmileBeam,
  FaDownload,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import map from "./../animation.json";

// Update the animation variants at the top of the file
const fadeIn = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Add a new variant for cards with scale effect
const cardAnimation = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Add these new animation variants at the top with the others
const titleAnimation = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const iconAnimation = {
  initial: { 
    scale: 0,
    opacity: 0,
    rotate: -30
  },
  animate: { 
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 sm:px-12 lg:px-24 py-4 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-2xl font-medium items-center flex"
          style={{ color: "#0089E5" }}
        >
          <img
            src="/assets/icon1.png" // Replace with your image path
            alt="Geo"
            className="w-8 h-8 object-cover"
          />
          <span>Geo</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-600">
            Home
          </a>
          <a href="#features" className="text-gray-600">
            Features
          </a>
          <a href="#howitworks" className="text-gray-600">
            How It Works
          </a>
          <a href="#about" className="text-gray-600">
            About
          </a>
          {/* <a href="#contact" className="text-gray-600">
            Contact
          </a> */}
          {/* Button for Download */}
          <a href="https://tinyurl.com/GeoMobileApp" download="Geo.apk">
            <Button
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium transition-all hover:scale-105"
              variant="default"
              style={{
                background: "linear-gradient(to right, #0089e5, #00a1ff)",
                color: "#fff",
              }}
            >
              Download App
            </Button>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white">
            {/* Mobile menu icon (hamburger) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main content (Hero Section) */}
      <div
        className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
        id="home"
      >
        {/* Background blur effects */}
        <div 
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/30 blur-[120px]"
          style={{ background: 'linear-gradient(to right, rgba(0,137,229,0.15), rgba(0,161,255,0.15))' }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/30 blur-[120px]"
          style={{ background: 'linear-gradient(to left, rgba(0,137,229,0.15), rgba(0,161,255,0.15))' }}
        />

        {/* Content */}
        <motion.div 
          className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col items-center pt-20 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Lottie Animation Section */}
          {/* <div className="w-full max-w-xl mt-0">
            <Lottie 
              animationData={map} 
              loop={true}
              style={{ 
                height: '300px'
              }}
            />
          </div> */}

          {/* Text Section */}
          <motion.div 
            className="w-full max-w-3xl text-center space-y-6"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
              Smart commuting made easy with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0089e5] to-[#00a1ff]">
                Geo
              </span>
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg lg:text-xl font-m">
              Real-time tracking of Modern Jeepneys for a safer and smarter
              commute.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {/* Button for Download */}
              <a href="https://tinyurl.com/GeoMobileApp" download="Geo.apk">
                <Button
                  className="w-full sm:w-auto px-6 py-6 text-lg font-medium transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(to right, #0089e5, #00a1ff)",
                    color: "#fff",
                  }}
                >
                  Download App
                </Button>
              </a>
              <a href="#howitworks">
                <Button
                  className="w-full sm:w-auto px-6 py-6 text-lg"
                  variant="outline"
                  style={{
                    borderColor: "#0089e5",
                    borderWidth: 2,
                    color: "#0089e5",
                  }}
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="py-24 bg-white relative overflow-hidden" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="features"
      >
        {/* Background blur effects */}
        <div 
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/30 blur-[120px]"
          style={{ background: 'linear-gradient(to right, rgba(0,137,229,0.15), rgba(0,161,255,0.15))' }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/30 blur-[120px]"
          style={{ background: 'linear-gradient(to left, rgba(0,137,229,0.15), rgba(0,161,255,0.15))' }}
        />
        
        {/* Content */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          <motion.h1 
            variants={titleAnimation}
            className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800"
          >
            Key Features
          </motion.h1>
          <motion.p 
            variants={titleAnimation}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
          >
            Experience seamless commuting with our innovative features
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            {/* Real-Time Tracking Card */}
            <motion.div variants={cardAnimation}>
              <Card className="p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                  variants={iconAnimation}
                >
                  <FaMapMarkedAlt className="text-3xl text-[#0089e5]" />
                </motion.div>
                <motion.h3 
                  variants={fadeIn} 
                  className="text-xl font-semibold mb-4 text-gray-800"
                >
                  Real-time Route Tracking
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-gray-600"
                >
                  Track Modern Jeepneys on the map with live updates.
                </motion.p>
              </Card>
            </motion.div>

            {/* Modern Jeepney Info Card */}
            <motion.div variants={cardAnimation}>
              <Card className="p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                  variants={iconAnimation}
                >
                  <FaRoute className="text-3xl text-[#0089e5]" />
                </motion.div>
                <motion.h3 
                  variants={fadeIn}
                  className="text-xl font-semibold mb-4 text-gray-800"
                >
                  Modern Jeepney Information
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-gray-600"
                >
                  Get real-time information about modern jeepneys for a smoother commute.
                </motion.p>
              </Card>
            </motion.div>

            {/* User Interface Card */}
            <motion.div variants={cardAnimation}>
              <Card className="p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300"
                  variants={iconAnimation}
                >
                  <FaRegSmileBeam className="text-3xl text-[#0089e5]" />
                </motion.div>
                <motion.h3 
                  variants={fadeIn}
                  className="text-xl font-semibold mb-4 text-gray-800"
                >
                  User-friendly Interface
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-gray-600"
                >
                  Enjoy a simple, easy-to-use interface for a better user experience.
                </motion.p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div 
        className="py-24 bg-gradient-to-br from-blue-600 to-blue-400 relative overflow-hidden" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="howitworks"
      >
        {/* Content */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              className="md:w-1/2"
              variants={fadeIn}
            >
              <img
                src="/assets/fordland2.png"
                alt="How it works"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 space-y-12"
              variants={staggerContainer}
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  How It Works
                </h1>
                <p className="text-blue-50 text-lg mb-12">
                  Get started with Geo in three simple steps
                </p>
              </div>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaDownload className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Download the App
                    </h3>
                    <p className="text-blue-50">
                      Get started by downloading the Geo app on your device.
                      Available for Android.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkedAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Track Your Jeepney
                    </h3>
                    <p className="text-blue-50">
                      Use real-time tracking to view the exact location of modern
                      jeepneys and information.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaShieldAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Enjoy Safe and Efficient Commute
                    </h3>
                    <p className="text-blue-50">
                      With location tracking, your commute is both safe and
                      efficient.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        className="py-24 bg-white relative overflow-hidden" 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="about"
      >
        {/* Background blur effects */}
        <div 
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/30 blur-[120px]"
          style={{ background: 'linear-gradient(to right, rgba(0,137,229,0.15), rgba(0,161,255,0.15))' }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-200/30 blur-[120px]"
          style={{ background: 'linear-gradient(to left, rgba(0,137,229,0.15), rgba(0,161,255,0.15))' }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          <motion.h1 
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800"
          >
            Meet the Developers
          </motion.h1>
          {/* <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
            The talented team behind Geo
          </p> */}
          <motion.div 
            className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto"
            variants={staggerContainer}
          >
            {/* Developer 1 */}
            <motion.div variants={cardAnimation}>
              <Card className="p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Lorenzo Jay R. Pantalla
                </h3>
                <p className="text-[#0089e5] font-medium mb-4">
                  Lead Developer
                </p>
                <p className="text-gray-600">
                  Bachelor of Science in Information Systems
                </p>
              </Card>
            </motion.div>

            {/* Developer 2 */}
            <motion.div variants={cardAnimation}>
              <Card className="p-10 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 border-none bg-white rounded-2xl">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  Angela Dianne Nucum
                </h3>
                <p className="text-[#0089e5] font-medium mb-4">
                  Web Developer
                </p>
                <p className="text-gray-600">
                  Bachelor of Science in Computer Science
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/icon1.png"
                  alt="Geo"
                  className="w-8 h-8 object-cover"
                />
                <span
                  className="text-2xl font-medium"
                  style={{ color: "#0089E5" }}
                >
                  Geo
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Making commuting easier and safer with real-time modern jeepney
                tracking.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#howitworks"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Download App</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the Geo app now and start your smart commuting journey.
              </p>
              <a href="https://tinyurl.com/GeoMobileApp" download="Geo.apk">
              <Button
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(to right, #0089e5, #00a1ff)",
                  color: "#fff",
                }}
              >
                Download for Android
              </Button>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Geo. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
