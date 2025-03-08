import { Link } from "react-router-dom";

function WholesaleRetail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Wholesaler Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your username" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
        </div>
        <div className="mt-2 text-center">
          <Link to="/register" className="text-green-600 hover:underline">Create an Account</Link>
        </div>
      </div>
    </div>
  );
}

export default WholesaleRetail;
