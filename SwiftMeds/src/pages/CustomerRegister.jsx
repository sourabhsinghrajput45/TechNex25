import { Link } from "react-router-dom";
import { useState } from "react";

function CustomerRegister() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful! (Verification will be added later)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Customer Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your first name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your last name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your address" required />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/customer" className="text-blue-600 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegister;
