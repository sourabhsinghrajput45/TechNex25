import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    shopName: "",
    shopNumber: "",
    shopLocation: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Simple regex for email validation
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone); // Ensures phone is exactly 10 digits
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change
    if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
    } else if (name === "phone") {
      setErrors({ ...errors, phone: validatePhone(value) ? "" : "Phone number must be 10 digits" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!validatePhone(formData.phone)) newErrors.phone = "Phone number must be 10 digits";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Registration Successful!");
      // Future: Send data to the backend/database here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter first name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter last name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter your email" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter phone number" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Shop Name</label>
            <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter shop name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Shop Number</label>
            <input type="text" name="shopNumber" value={formData.shopNumber} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter shop number" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Shop Location</label>
            <input type="text" name="shopLocation" value={formData.shopLocation} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Enter shop location" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded-lg" placeholder="Create a password" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/wholesale" className="text-blue-600 hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
