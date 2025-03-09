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
- backend_module01 runs on http://127.0.0.1:5000//
- backend_module02 runs on http://127.0.0.1:8080//

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
![Screenshot (28)](https://github.com/user-attachments/assets/200c45ae-4897-41ed-8211-7aee1bc75c53)
![Screenshot (29)](https://github.com/user-attachments/assets/5f12f809-f02b-474a-9f5c-f4940a05f4fe)
![Screenshot (30)](https://github.com/user-attachments/assets/aa6fc55f-6988-4938-8ed7-6fe1bde8db27)
![Screenshot (31)](https://github.com/user-attachments/assets/ebd400a1-eae5-4049-824c-667e27548efa)
![Screenshot (32)](https://github.com/user-attachments/assets/a26981e7-a5d9-47f6-ad1d-d63161f08e9d)
![Screenshot (33)](https://github.com/user-attachments/assets/d6bea53c-8759-4182-83aa-f245e807ce33)
![Screenshot (34)](https://github.com/user-attachments/assets/351366ad-95b7-42bb-a866-5d44a47df28a)



## 🏗️ Future Improvements

- Implement user authentication for secure access
- Enhance AI model accuracy and efficiency
- Add an admin panel for inventory management
- Implement real-time notifications for delivery updates
- Expand the consultation service with additional medical data



## 👨‍💻 Author

Developed by 
- 1.Sourabh Singh Rajput
- 2.Swayam Dhamunia
- 3.Utkarsh Pathak
- 4.Aryan Raghuvanshi
