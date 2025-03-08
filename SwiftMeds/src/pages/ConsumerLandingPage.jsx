import { useState } from "react";
import axios from "axios";

const ConsumerLanding = () => {
    const [medicineName, setMedicineName] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handlePredict = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", {
                medicine_name: medicineName,
                stock_quantity: Number(stockQuantity),
            });

            setPrediction(response.data.location);
            setError(null);
        } catch (err) {
            setPrediction(null);
            setError(err.response?.data?.error || "Error making prediction");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Medicine Location Predictor</h1>
            <input
                type="text"
                placeholder="Enter Medicine Name"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
                className="border p-2 rounded mb-2 w-80"
            />
            <input
                type="number"
                placeholder="Enter Stock Quantity"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                className="border p-2 rounded mb-4 w-80"
            />
            <button
                onClick={handlePredict}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Predict Location
            </button>
            {prediction && (
                <p className="mt-4 text-green-600 font-bold">
                    Predicted Location: {prediction}
                </p>
            )}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    );
};

export default ConsumerLanding;
