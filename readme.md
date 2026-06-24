# 🏢 Penthara - Employee Management System

Penthara is a full-stack Employee Management System built using the MERN stack. It allows organizations to efficiently manage employee records through a modern and responsive web interface. The application supports employee CRUD operations, user authentication, protected routes, and real-time data synchronization using React Query.

---

## 🚀 Features

### Authentication & Authorization

* User Registration
* User Login
* User Logout
* Protected Routes using Middleware
* Authenticated User Retrieval

### Employee Management

* Add New Employees
* View All Employees
* View Employee Details
* Update Employee Information
* Delete Employee Records

### User Experience

* Responsive Design
* Clean and Modern UI
* Fast Data Fetching
* Optimistic UI Updates
* Server State Management with React Query

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* TanStack React Query
* Tailwind CSS


### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* Custom Protected Route Middleware

---

## 📂 Project Structure

### Backend

```bash
backend/
│
├── controller/          # Request handling logic
│
├── db/                  # MongoDB connection setup
│
├── middleware/          # Authentication middleware
│
├── models/              # Mongoose schemas
│
├── routes/              # API route definitions
│
├── utils/               # Utility/helper functions
│
├── .env
├── .gitignore
├── index.js             # Server entry point
├── package.json
└── package-lock.json
```

### Frontend

```bash
### Frontend

```bash
frontend/
│
├── src/
│   │
│   ├── assets/          # Images, icons, and static files
│   │
│   ├── components/      # Reusable UI components
│   │
│   ├── lib/             # API calls, React Query setup, utilities
│   │
│   ├── pages/           # Application pages/screens
│   │
│   ├── App.jsx          # Main application component
│   ├── App.css
│   ├── index.css
│   └── main.jsx         # React entry point
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Divyansh9557/penthara.git
cd penthara
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
NODE_ENV=develpoment
CORS_ORIGIN= http://localhost:5173
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

Backend URL:

```bash
http://localhost:5000
```

---

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| POST   | `/login`    | Login User         |
| POST   | `/register` | Register New User  |
| GET    | `/logout`   | Logout User        |
| GET    | `/getUser`  | Get Logged-in User |

### Employee Routes

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/user`       | Get All Employees  |
| GET    | `/user/:id`   | Get Employee By ID |
| POST   | `/create`     | Create Employee    |
| POST   | `/update/:id` | Update Employee    |
| POST   | `/delete`     | Delete Employee    |

---

## 🔄 Application Flow

```text
User
 │
 ▼
React Frontend
 │
 ▼
React Query
 │
 ▼
Express API
 │
 ├── Authentication Routes
 └── Employee Routes
 │
 ▼
Controllers
 │
 ▼
Mongoose Models
 │
 ▼
MongoDB Database
```

---

## 🎯 What I Learned

Through this project, I gained practical experience with:

* Building RESTful APIs using Express.js
* MongoDB CRUD Operations
* Mongoose Data Modeling
* Authentication & Authorization
* React Query Data Fetching
* State Management
* Protected Routes
* Full Stack Application Development
* Responsive UI Design with Tailwind CSS

---

## 📸 Screenshots

### Login Page

Add screenshot here

### Dashboard

Add screenshot here

### Employee Listing

Add screenshot here

### Add Employee Form

Add screenshot here

### Update Employee Form

Add screenshot here

---

## 🔮 Future Enhancements

* Role-Based Access Control (Admin/User)
* Search and Filtering
* Pagination
* Employee Attendance Management
* Payroll Management
* Employee Profile Pictures
* Dashboard Analytics
* Export Data to Excel/PDF
* Email Notifications

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository

```bash
git fork
```

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

### Divyansh

* GitHub: https://github.com/Divyansh9557

---

## ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub.

It helps others discover the project and motivates further improvements.
