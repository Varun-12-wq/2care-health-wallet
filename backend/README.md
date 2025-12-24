A simple Digital Health Wallet application that allows users to store and view health records securely.
Built as part of the 2care.ai assignment.

⸻

Features Implemented
	•	View health records stored in the system
	•	Backend REST APIs using Node.js & Express
	•	SQLite database for persistent storage
	•	React frontend fetching data from backend
	•	Frontend ↔ Backend integration
	•	Records displayed dynamically in UI

⸻

Tech Stack

Frontend
	•	ReactJS
	•	Fetch API

Backend
	•	Node.js
	•	Express.js

Database
	•	SQLite

Project Structure  

 2care-health-wallet/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── initDb.js
│   ├── database/
│   │   └── records.db
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   └── App.js
│   ├── package.json
│   └── README.md  

Backend Setup

cd backend
npm install
node initDb.js
node server.js

Backend will run at:

http://localhost:5050

Frontend Setup

cd frontend
npm install
npm start

Frontend will run at:

http://localhost:3000

API Documentation
➤ Get all records
GET /records
➤ Add a new record
POST /records
Content-Type: application/json

{
  "name": "Varun",
  "age": 22,
  "condition": "Healthy",
  "balance": 5000
}


Architecture Overview
	•	React frontend handles UI and data display
	•	Node.js backend exposes REST APIs
	•	SQLite database stores health records
	•	Frontend communicates with backend using HTTP requests

⸻

 Security Considerations
	•	Backend API validation
	•	Read-only data access from frontend
	•	Can be extended with authentication (JWT) and role-based access

⸻

 Notes
	•	This is a simplified MVP implementation
	•	Authentication & access sharing can be extended in future iterations

ARCHITECTURE EXPLANATION
System Architecture

The application follows a simple client-server architecture.
	•	Frontend (ReactJS)
Handles user interface, fetches health records from backend APIs, and displays them dynamically.
	•	Backend (Node.js + Express)
Provides RESTful APIs for storing and retrieving health records.
	•	Database (SQLite)
Stores health records persistently in a lightweight relational database.

Data Flow

User Browser
   ↓
React Frontend (localhost:3000)
   ↓ HTTP Fetch
Node.js Backend (localhost:5050)
   ↓ SQL Queries
SQLite Database

