# 📧 Email Sender System

A simple full-stack web application that allows users to register their name and email, and sends a confirmation email using Node.js, MySQL, and Angular 14.

---

## 🔧 Tech Stack

- Frontend: Angular 14  
- Backend: Node.js + Express  
- Database: MySQL (tested via phpMyAdmin)  
- Email Service: Ethereal (for email testing)

---

## 📁 Project Structure

```
email-sender-system/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── .env
│   └── package.json
├── frontend/
│   └── [Angular app files]
└── README.md
```

---

## 🚀 Getting Started

### 📦 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (see format below).

4. Start the server:
   ```bash
   node server.js
   ```

---

### 🌐 Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install Angular dependencies:
   ```bash
   npm install
   ```

3. Start the Angular app:
   ```bash
   ng serve
   ```

4. Open in browser:  
   `http://localhost:4200`

---

## 🔐 Environment Variables (`.env`)

Place this in your `/backend/.env` file:

```
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=email_system
```

*No Gmail password needed — uses Ethereal test email.*

---

## 📬 Email Testing

- The app uses [Ethereal](https://ethereal.email/) — a fake SMTP server.
- After submitting the form, check the browser console or API response for `previewURL`.
- Open that URL to view the test email.

---

## 📌 Notes

- Ensure MySQL is running and `email_system` database exists.
- Table name: `users` (columns: `id`, `name`, `email`).
- All emails are stored and logged, but not delivered to real inboxes (Ethereal only).

---

## 👤 Author

Bhargav Patel
