import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConsumerLanding from "./pages/ConsumerLanding";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consumer-landing" element={<ConsumerLanding />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
