import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FaMapMarkedAlt,
  FaRoute,
  FaRegSmileBeam,
  FaDownload,
  FaShieldAlt,
} from "react-icons/fa";
import Lottie from "lottie-react";
import map from "./../animation.json";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 sm:px-12 lg:px-24 py-4 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-medium items-center flex" style={{ color: "#0089E5" }}>
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
          {/* <a href="#contact" className="text-gray-600">
            Contact
          </a> */}
          {/* Button for Download */}
          <a href="https://tinyurl.com/GeoMobileApplication" download="Geo.apk">
            <Button
              className="w-full sm:w-auto px-4 py-2 text-sm"
              variant="default"
              style={{
                backgroundColor: "#0089e5",
                color: "#fff",
                fontFamily: "Onest",
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
        className="h-screen flex items-center justify-center bg-gray-100"
        style={{
          backgroundColor: "#f8f8ff",
        }}
      >
        <div
          className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse sm:flex-row items-center sm:gap-12"
          id="home"
        >
          {/* Text Section */}
          <div className="sm:w-1/2 text-center sm:text-left">
            <h1
              className="text-4xl font-extrabold tracking-tight text-blue-600 sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Onest", color: "#0089e5" }}
            >
              Smart commuting made easy with Geo
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl lg:text-xl font-light"
              style={{ fontFamily: "Onest" }}
            >
              Real-time tracking of Modern Jeepneys for a safer and smarter
              commute.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start sm:gap-4">
              {/* Button for Download */}
              <a href="https://tinyurl.com/GeoMobileApplication" download="Geo.apk">
                <Button
                  className="w-full sm:w-auto px-6 py-6 text-lg"
                  variant="default"
                  style={{
                    backgroundColor: "#0089e5",
                    color: "#fff",
                    fontFamily: "Onest",
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
                    fontFamily: "Onest",
                    backgroundColor: "#f8f8ff",
                  }}
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Lottie Animation Section */}
          <div className="sm:w-1/2 mt-12 sm:mt-0">
            <Lottie animationData={map} loop={true}></Lottie>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="py-16 bg-white container mx-auto px-6 sm:px-12 lg:px-24 border-t-8 border-t-sky-500"
        id="features"
        style={{ color: "#0089e5", fontFamily: "Onest" }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-black text-center mb-12"
            style={{ fontFamily: "Onest" }}
          >
            Key Features Include:
          </h1>
          <div className="grid md:grid-cols-3 gap-8 p-11">
            {/* Real-Time Tracking Card */}
            <Card
              className="p-6 flex flex-col items-center text-center shadow-lg border rounded-lg"
              style={{ borderColor: "#0089e5" }}
            >
              <FaMapMarkedAlt className="text-4xl text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Real-time Route Tracking
              </h3>
              <p className="text-gray-600 mb-4">
                Track Modern Jeepneys on the map with live updates.
              </p>
            </Card>

            {/* Modern Jeepney Info Card */}
            <Card
              className="p-6 flex flex-col items-center text-center shadow-lg border rounded-lg"
              style={{ borderColor: "#0089E5" }}
            >
              <FaRoute className="text-4xl text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Modern Jeepney Information
              </h3>
              <p className="text-gray-600 mb-4">
                Get real-time information about modern jeepneys for a smoother
                commute.
              </p>
            </Card>

            {/* User Interface Card */}
            <Card
              className="p-6 flex flex-col items-center text-center shadow-lg border rounded-lg"
              style={{ borderColor: "#0089e5" }}
            >
              <FaRegSmileBeam className="text-4xl text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                User-friendly Interface
              </h3>
              <p className="text-gray-600 mb-4">
                Enjoy a simple, easy-to-use interface for a better user
                experience.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div
        className="py-16 text-blue-600 container mx-auto px-6 sm:px-12 lg:px-24 border-t-8 border-t-sky-500"
        id="howitworks"
        style={{ backgroundColor: "#f8f8ff", fontFamily: "Onest" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section - Full height on the left */}
            <div className="md:w-1/2 h-full mb-4 md:mb-0">
              <img
                src="/assets/fordland2.png" // Replace with your image path
                alt="How it works"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section with Icons on the Right */}
            <div className="md:w-1/2 flex flex-col gap-8 justify-center items-start">
              <h1
                className="text-4xl font-bold text-center mb-4"
                style={{ color: "#0089e5" }}
              >
                How It Works
              </h1>
              {/* Step 1: Download the App */}
              <div className="flex items-center gap-4">
                <FaDownload className="text-4xl" style={{ color: "#0089e5" }} />
                <div>
                  <h3
                    className="text-2xl font-bold mb-2 text-left"
                    style={{ color: "#0089e5" }}
                  >
                    Download the App
                  </h3>
                  <p className="text-gray-600 mb-4 text-left">
                    Get started by downloading the Geo app on your device.
                    Available for Android.
                  </p>
                </div>
              </div>

              {/* Step 2: Track Your Jeepney */}
              <div className="flex items-center gap-4">
                <FaMapMarkedAlt
                  className="text-5xl "
                  style={{ color: "#0089e5" }}
                />
                <div>
                  <h3
                    className="text-2xl font-bold mb-2 text-left"
                    style={{ color: "#0089e5" }}
                  >
                    Track Your Jeepney
                  </h3>
                  <p className="text-gray-600 mb-4 text-left">
                    Use real-time tracking to view the exact location of modern
                    jeepneys and information.
                  </p>
                </div>
              </div>

              {/* Step 3: Enjoy Safe and Efficient Commute */}
              <div className="flex items-center gap-4">
                <FaShieldAlt
                  className="text-4xl"
                  style={{ color: "#0089e5" }}
                />
                <div>
                  <h3
                    className="text-2xl font-bold mb-2 text-left"
                    style={{ color: "#0089e5" }}
                  >
                    Enjoy Safe and Efficient Commute
                  </h3>
                  <p className="text-gray-600 mb-4 text-left">
                    With location tracking, your commute is both safe and
                    efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
