import React, { useEffect, useState } from 'react';

function CustomerLogin() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Delay for the animation to run before showing the content
  }, []);

  const redirectToFlaskApp = () => {
    // Redirect the user to the Flask app running on localhost:5000
    window.location.href = "http://127.0.0.1:5000/";  // Replace this URL with your Flask app's URL
  };

  const redirectToMedicineTracker = () => {
    // Redirect the user to the medicine tracking page
    window.location.href = "http://127.0.0.1:8080/";  // Replace this URL with your medicine tracking URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-xl"></div>
        <div className="absolute left-20 top-1/4 w-32 h-32 rounded-full bg-purple-400 opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-indigo-300 opacity-20 blur-xl"></div>
      </div>
      
      <div
        className={`${
          isLoaded ? 'scale-100' : 'scale-0'
        } bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} relative z-10`}
        style={{
          transition: 'all 1s ease-in-out',
          backgroundColor: '#fff8f0', // Warmer light color
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 30px rgba(79, 70, 229, 0.2)',
        }}
      >
        {/* Logo or icon at the top */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Welcome to SwiftMeds
        </h2>
        
        <p className="text-lg text-center text-gray-700 mb-8">
          Your trusted healthcare partner for diagnosis and medication.
        </p>
        
        <form className="space-y-4">
          <button 
            type="button"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-2xl text-lg font-medium shadow-xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={redirectToFlaskApp}
          >
            Start Your Consultation
          </button>
          
          <button 
            type="button"
            className="w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white py-4 rounded-2xl text-lg font-medium shadow-xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            onClick={redirectToMedicineTracker}
          >
            Track Your Medications
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our <span className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium transition-colors">Terms and Conditions</span>.
          </p>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center space-x-4">
          <div className="text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs">Secure</span>
          </div>
          <div className="text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs">Private</span>
          </div>
          <div className="text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs">Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;