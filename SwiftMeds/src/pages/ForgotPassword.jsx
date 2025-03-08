import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
        <p className="text-gray-600 text-center mb-4">Enter your email to reset your password.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter your email" />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/wholesale" className="text-blue-600 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
