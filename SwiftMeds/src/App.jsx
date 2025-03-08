import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WholesaleRetail from "./pages/WholesaleRetail";
import Consumer from "./pages/Consumer";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import CustomerRegister from "./pages/CustomerRegister"; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wholesale" element={<WholesaleRetail />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer-register" element={<CustomerRegister />} /> {/* Added correct route */}
      </Routes>
    </Router>
  );
}

export default App;
