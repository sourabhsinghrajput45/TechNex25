import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [heroWidth, setHeroWidth] = useState(100); // Hero section starts as 100vw (full width)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPillSplit, setIsPillSplit] = useState(false);
  const heroRef = useRef(null);
  const pillRef = useRef(null);
  const quoteWords = ["Your", "health", "is", "our", "mission,", "care", "is", "our", "passion"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
      
      // Hero width animation
      const newWidth = Math.max(100 - scrollPosition / 5, 50); // Minimum width 50vw
      setHeroWidth(newWidth);

      // Banner visibility
      if (scrollPosition > 100) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
      
      // Trigger pill split when scrolled 20% down
      if (progress > 0.2 && !isPillSplit) {
        setIsPillSplit(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial animations
    const timer = setTimeout(() => {
      setIsPillSplit(true);
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isPillSplit]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-50 to-teal-50 overflow-y-auto pt-20">
      {/* Toolbar */}
      <header className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
        <div className="flex justify-between items-center p-6 max-w-screen-xl mx-auto">
          <div className="text-teal-700 text-2xl font-semibold cursor-pointer">SwiftMeds</div>
          <nav>
            <ul className="flex space-x-6 text-gray-800 font-medium">
              <li><a href="#home" className="hover:text-teal-700 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-teal-700 transition duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-teal-700 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animated Pill */}
      <section
        ref={heroRef}
        className="relative h-screen mx-auto px-6 py-12 rounded-xl shadow-lg transition-all duration-500 ease-out flex items-center justify-center overflow-hidden"
        style={{
          width: `${heroWidth}vw`,
          height: '100vh',
          backgroundImage: "url('/img1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white opacity-20" 
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Container for pill and text to keep them centered and properly spaced */}
        <div className="absolute flex flex-col items-center justify-center z-10" style={{ top: '25%' }}>
          {/* Quote that appears when pill splits */}
          <div className="text-center mb-12 transition-all duration-500 ease-in-out">
            <div className="flex flex-wrap justify-center">
              {quoteWords.map((word, index) => (
                <span
                  key={index}
                  className="text-lg sm:text-4xl mx-1 font-semibold drop-shadow-lg transition-all duration-500 ease-in-out"
                  style={{
                    opacity: isPillSplit ? 1 : 0,
                    transform: isPillSplit ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${400 + index * 120}ms`,
                    color: index < 5 ? "#0f7261" : "#1c5d85" // Darker medical theme colors
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          
          {/* Pill Animation */}
          <div 
            ref={pillRef} 
            className="relative h-12 w-32"
          >
            {/* Left half of pill */}
            <div 
              className="absolute h-12 w-16 rounded-l-full shadow-2xl transition-all duration-1000 ease-in-out"
              style={{
                background: "linear-gradient(to right, #0e6655, #13866f)",
                left: 0,
                transform: isPillSplit ? "translateX(-100%)" : "translateX(0)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), inset 0 -2px 5px rgba(0, 0, 0, 0.2)"
              }}
            />
            
            {/* Right half of pill */}
            <div 
              className="absolute h-12 w-16 rounded-r-full shadow-2xl transition-all duration-1000 ease-in-out"
              style={{
                background: "linear-gradient(to right, #2874a6, #1a5276)",
                right: 0,
                transform: isPillSplit ? "translateX(100%)" : "translateX(0)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), inset 0 -2px 5px rgba(0, 0, 0, 0.2)"
              }}
            />
            
            {/* Pill shine effect */}
            <div
              className="absolute h-5 w-28 rounded-full opacity-50 transition-all duration-1000 ease-in-out"
              style={{
                background: "linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
                top: "2px",
                left: "2px",
                transform: isPillSplit ? "scaleX(0)" : "scaleX(1)",
                transformOrigin: "center",
                zIndex: 2
              }}
            />
          </div>
        </div>

        <div className="relative z-10 text-center p-4 mt-32">
          <h1 
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            style={{
              textShadow: "0 2px 15px rgba(0, 0, 0, 0.5)"
            }}
          >
            AI-Powered Medical Supply Chain
          </h1>
          <p 
            className="text-sm md:text-lg text-white mt-4 mx-auto max-w-xl drop-shadow-md"
            style={{
              textShadow: "0 1px 10px rgba(0, 0, 0, 0.7)"
            }}
          >
            Optimize medical deliveries with AI-driven analytics and smart logistics, improving efficiency and reducing costs.
          </p>
          <Link to="/get-started">
            <button 
              className="mt-6 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
                background: "linear-gradient(135deg, #1a5276, #0e6655)"
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full max-w-4xl mt-6">
        <Link
          to="/wholesale"
          className="bg-white bg-opacity-80 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 group"
          style={{
            backdropFilter: "blur(10px)",
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))"
          }}
        >
          <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-teal-900 group-hover:text-teal-700 transition-colors duration-300">Wholesalers & Retailers</h2>
          <p className="text-gray-800 mt-2">
            Manage bulk medical supplies efficiently with AI-driven inventory tracking, ensuring optimal stock levels and timely deliveries.
          </p>
        </Link>

        <Link
          to="/consumer"
          className="bg-white bg-opacity-80 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 group"
          style={{
            backdropFilter: "blur(10px)",
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))"
          }}
        >
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-teal-900 group-hover:text-blue-700 transition-colors duration-300">Consumers</h2>
          <p className="text-gray-800 mt-2">
            Track your medical orders in real-time and get the fastest delivery options. Ensure you receive your products when you need them most.
          </p>
        </Link>
      </div>

      {/* Scrollable Content Section with Animation */}
      <div 
        className="w-full max-w-4xl mx-auto mt-16 p-6 transition-transform duration-500 ease-in-out bg-white bg-opacity-70 rounded-2xl shadow-lg"
        style={{
          transform: `translateY(${Math.max(0, 30 - scrollProgress * 60)}px)`,
          opacity: Math.min(1, scrollProgress * 3),
          backdropFilter: "blur(8px)"
        }}
      >
        <h2 className="text-3xl font-semibold text-teal-900">More Features Coming Soon</h2>
        <p className="text-lg text-gray-900 mt-4">
          We're working hard to bring you more features to optimize medical supply chain management. Stay tuned for updates.
        </p>
      </div>

      {/* Banner */}
      {showBanner && (
        <div 
          className="fixed bottom-0 left-0 w-full py-3 px-4 transform transition-all duration-500 ease-in-out z-50 rounded-t-xl"
          style={{
            background: "linear-gradient(135deg, rgba(14, 102, 85, 0.9), rgba(20, 90, 50, 0.9))",
            backdropFilter: "blur(10px)",
            boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)"
          }}
        >
          <div className="flex justify-between items-center max-w-screen-xl mx-auto">
            <span className="font-medium text-white drop-shadow-sm">Special Offer: Get 10% off on your first order!</span>
            <button
              onClick={() => setShowBanner(false)}
              className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-white transition-all duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2874a6, #1a5276)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-16 w-full rounded-t-3xl shadow-inner">
        <div className="text-center text-gray-800 max-w-screen-xl mx-auto px-6">
          <p>© 2025 SwiftMeds. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="/privacy-policy" className="text-teal-700 hover:text-teal-900 transition duration-300">Privacy Policy</a></li>
            <li><a href="/terms" className="text-teal-700 hover:text-teal-900 transition duration-300">Terms & Conditions</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;