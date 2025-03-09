# 🚀 SwiftMeds

SwiftMeds is an AI-powered medical supply chain management platform that optimizes medicine delivery and provides intelligent consultation services. The project consists of a **Vite + React** frontend that connects with two separate **Flask backend modules** running on different ports.

## 📌 Features

- **AI-Powered Consultation**  
  Users can enter symptoms and receive AI-driven medical consultation recommendations.

- **Medicine Tracking System**  
  Tracks medical supplies and optimizes delivery routes using AI analytics.

- **Role-Based Access**  
  - **Wholesalers & Retailers**: Manage bulk medical supply inventory.  
  - **Consumers**: Track and order medicines in real-time.

- **Dynamic UI with React & Tailwind CSS**  
  A modern, responsive frontend built using React with Tailwind CSS for styling.

## 🏗️ Project Structure

```
SwiftMeds/
│── backend_module01/   # Flask backend for consultation services
│── backend_module02/   # Flask backend for medicine tracking
│── frontend/           # Vite + React frontend
│── README.md
```

## 🛠️ Tech Stack

### Frontend (Vite + React)
- **Vite** - Fast development server and build tool.
- **React** - Component-based UI library.
- **Tailwind CSS** - Utility-first CSS framework.
- **React Router** - Client-side navigation.

### Backend (Flask)
- **Flask** - Lightweight Python web framework.
- **Flask-CORS** - Enables cross-origin requests.
- **MySQL** - Database for user authentication and data storage.
- **Joblib** - Loads AI models for consultation and medicine tracking.

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/SwiftMeds.git
cd SwiftMeds
```

### 2️⃣ Backend Setup

#### Install dependencies for both Flask modules

```sh
cd backend_module01
pip install -r requirements.txt

cd ../backend_module02
pip install -r requirements.txt
```

#### Run Flask Servers

```sh
# Start Consultation Backend
cd backend_module01
python app.py

# Start Medicine Tracking Backend (in a new terminal)
cd backend_module02
python app.py
```

By default:
- backend_module01 runs on http://localhost:5001/
- backend_module02 runs on http://localhost:5002/

### 3️⃣ Frontend Setup

#### Install dependencies and start the development server

```sh
cd ../frontend
npm install
npm run dev
```

The frontend runs on http://localhost:5173/ and communicates with both backend modules.

## 🔗 API Endpoints

### 📍 Consultation Service (backend_module01)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /predict | Predicts disease from symptoms |
| GET | /get_diseases | Returns a list of diseases |
| GET | /health-check | Checks if API is running |

### 📍 Medicine Tracking Service (backend_module02)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /track | Tracks medicine delivery status |
| GET | /status | Fetches order tracking details |

## 📸 Screenshots

*[Add screenshots of your application here]*

## 🏗️ Future Improvements

- Implement user authentication for secure access
- Enhance AI model accuracy and efficiency
- Add an admin panel for inventory management
- Implement real-time notifications for delivery updates
- Expand the consultation service with additional medical data

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 👨‍💻 Author

Developed by 
1.Sourabh Singh Rajput
2.Swayam Dhamunia
3.Utkarsh Pathak
4.Aryan Raghuvanshi
