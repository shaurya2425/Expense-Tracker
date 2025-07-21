# Expense Tracker (MERN Stack)

A full-featured Expense Tracker web application built with the MERN stack (MongoDB, Express, React, Node.js). Track your income and expenses, visualize your financial data, and manage your budget with a modern, responsive dashboard.

---

## 🚀 Features

- User authentication (JWT-based)
- Add, view, and delete income and expenses
- Dashboard with total balance, income, and expenses
- Recent transactions and financial overview
- Data visualization (charts for income/expenses)
- Profile image upload
- Download income/expense data as Excel files
- Responsive, modern UI (React + TailwindCSS)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Axios, Recharts
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, JWT, bcrypt
- **Other:** XLSX (Excel export), dotenv

---

## 📁 Folder Structure

```
Expense-Tracker/
  backend/         # Express API, MongoDB models, controllers, routes
  frontend/        # React app (Vite), UI components, pages, assets
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repo-url>
cd Expense-Tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```
MONGO_URI=<your-mongodb-uri>
PORT=8000
CLIENT_URL=http://localhost:5173
JWT_SECRET=<your-jwt-secret>
```

Start the backend server:
```bash
npm run dev
# or
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## 🔑 Environment Variables

**Backend (`backend/.env`):**
- `MONGO_URI` - MongoDB connection string
- `PORT` - Backend server port (default: 8000)
- `CLIENT_URL` - Frontend URL for CORS
- `JWT_SECRET` - Secret for JWT signing

**Frontend:**
- (No required .env by default; API base URL is set in `src/utils/apiPaths.js`)

---

## 📡 API Overview

### Auth
- `POST   /api/v1/auth/register` — Register new user
- `POST   /api/v1/auth/login` — Login user
- `GET    /api/v1/auth/getUser` — Get user info (auth required)
- `POST   /api/v1/auth/upload-image` — Upload profile image

### Income
- `POST   /api/v1/income/add` — Add income
- `GET    /api/v1/income/get` — Get all income
- `DELETE /api/v1/income/:id` — Delete income
- `GET    /api/v1/income/downloadexcel` — Download income as Excel

### Expense
- `POST   /api/v1/expense/add` — Add expense
- `GET    /api/v1/expense/get` — Get all expenses
- `DELETE /api/v1/expense/:id` — Delete expense
- `GET    /api/v1/expense/downloadexcel` — Download expenses as Excel

### Dashboard
- `GET    /api/v1/dashboard` — Get dashboard data (totals, recent transactions, etc.)

---

## 🖥️ Usage

1. Register and log in.
2. Add your income and expenses.
3. View your dashboard for a summary and charts.
4. Download your data as Excel files if needed.
5. Update your profile image.

---

## 🤝 Contribution

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📄 License

This project is licensed under the ISC License.

