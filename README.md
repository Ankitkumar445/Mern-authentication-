# MERN Authentication System

A full-stack authentication system built with **MongoDB, Express.js, React.js, and Node.js (MERN)**, featuring secure signup/login, email verification, JWT-based session handling, and password management.

> This project was provided by **Tata Steel** as part of an industrial training program.

---

## 🚀 Features

- **User Registration** — Sign up with name, email, and password (passwords hashed using bcrypt)
- **Email Verification** — New users receive a verification email (via Brevo API / Nodemailer) before gaining full access
- **Secure Login** — JWT-based authentication with HTTP-only cookies
- **Protected Routes** — Middleware-based route protection on both frontend and backend
- **Logout** — Clears session/token securely
- **Password Reset** — Forgot password flow via email
- **Persistent Sessions** — Auto-login on page refresh using stored JWT/cookie

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios (API requests)
- React Router DOM
- Context API (state management)

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (password hashing)
- Nodemailer / Brevo API (transactional emails)

**Deployment**
- Backend: Render
- Frontend: Vercel / Netlify
- Database: MongoDB Atlas

---

## 📁 Project Structure

```
Mern-authentication-/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── server/             # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server/` folder with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# Email service (Brevo API)
BREVO_API_KEY=your_brevo_api_key
SENDER_EMAIL=your_verified_sender_email

CLIENT_URL=http://localhost:5173
```

If your frontend needs its own environment file, create `.env` inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## 🏃 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ankitkumar445/Mern-authentication-.git
cd Mern-authentication-
```

### 2. Setup the backend
```bash
cd server
npm install
npm run dev
```

### 3. Setup the frontend
```bash
cd frontend
npm install
npm run dev
```

The backend will run on `http://localhost:5000` and the frontend on `http://localhost:5173` (or your configured port).

---

## 🔑 API Endpoints (Overview)

| Method | Endpoint                  | Description                     |
|--------|----------------------------|----------------------------------|
| POST   | `/api/auth/register`       | Register a new user              |
| POST   | `/api/auth/login`          | Login existing user              |
| POST   | `/api/auth/logout`         | Logout user                      |
| POST   | `/api/auth/send-verify-otp`| Send email verification OTP      |
| POST   | `/api/auth/verify-account` | Verify user account              |
| POST   | `/api/auth/send-reset-otp` | Send password reset OTP          |
| POST   | `/api/auth/reset-password` | Reset user password              |
| GET    | `/api/user/data`           | Get logged-in user data (protected) |

---

## 📌 Notes

- Passwords are never stored in plain text — they are hashed using **bcrypt** before saving to the database.
- Email verification uses **Brevo (formerly Sendinblue) API** for reliable transactional email delivery.
- MongoDB Atlas is used in production; a local MongoDB instance can be used for development.

---

## 📄 License

This project is for educational/training purposes as part of an industrial training program.
