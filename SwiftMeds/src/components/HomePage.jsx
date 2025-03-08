import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [heroWidth, setHeroWidth] = useState(100); // Hero section starts as 100vw (full width)
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Reduce hero section width as the user scrolls down
      const newWidth = Math.max(100 - scrollPosition / 5, 50); // Minimum width 50vw
      setHeroWidth(newWidth);

      // Show banner when the hero section is minimized
      if (scrollPosition > 100) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white to-green-50 overflow-y-auto pt-20">
      {/* Toolbar */}
      <header className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
        <div className="flex justify-between items-center p-6 max-w-screen-xl mx-auto">
          <div className="text-green-600 text-2xl font-semibold cursor-pointer">SwiftMeds</div>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section
        ref={heroRef}
        className="relative h-screen mx-auto px-6 py-12 rounded-xl shadow-lg transition-all duration-500 ease-out flex items-center justify-center"
        style={{
          width: `${heroWidth}vw`, // Dynamic width
          height: '100vh',
          backgroundImage: "url('/img1.jpg)", // Ensure the image path is correct
          backgroundSize: 'cover', // Ensure the image covers the whole area
          backgroundPosition: 'center', // Center the image
        }}
      >
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            AI-Powered Medical Supply Chain
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mt-4 mx-auto max-w-xl drop-shadow-md">
            Optimize medical deliveries with AI-driven analytics and smart logistics, improving efficiency and reducing costs.
          </p>
          <Link to="/get-started">
            <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full max-w-4xl">
        <Link
          to="/wholesale"
          className="bg-white bg-opacity-80 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-green-800">Wholesalers & Retailers</h2>
          <p className="text-gray-600 mt-2">
            Manage bulk medical supplies efficiently with AI-driven inventory tracking, ensuring optimal stock levels and timely deliveries.
          </p>
        </Link>

        <Link
          to="/consumer"
          className="bg-white bg-opacity-80 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-green-800">Consumers</h2>
          <p className="text-gray-600 mt-2">
            Track your medical orders in real-time and get the fastest delivery options. Ensure you receive your products when you need them most.
          </p>
        </Link>
      </div>

      {/* Scrollable Content Section with Animation */}
      <div className="w-full max-w-4xl mx-auto mt-16 p-6 transition-transform duration-500 ease-in-out">
        <h2 className="text-3xl font-semibold text-green-800">More Features Coming Soon</h2>
        <p className="text-lg text-gray-700 mt-4">
          We're working hard to bring you more features to optimize medical supply chain management. Stay tuned for updates.
        </p>
      </div>

      {/* Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-green-500 bg-opacity-80 text-white py-3 px-4 transform transition-transform duration-500 ease-in-out translate-y-0 backdrop-blur-md rounded-t-xl z-50">
          <div className="flex justify-between items-center">
            <span>Special Offer: Get 10% off on your first order!</span>
            <button
              onClick={() => setShowBanner(false)}
              className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-16 w-full">
        <div className="text-center text-gray-600">
          <p>© 2025 SwiftMeds. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="/privacy-policy" className="text-green-600 hover:text-green-800">Privacy Policy</a></li>
            <li><a href="/terms" className="text-green-600 hover:text-green-800">Terms & Conditions</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
