# Create a human-readable README.txt file content and save it as a text file.

readme_text = """
Store Rating App (MERN + MySQL)

Hey there

Welcome to the Store Rating App! This is a full-stack web application built using the MERN stack 
(MongoDB was too mainstream – so we went with MySQL ). It allows users to register, log in, rate 
stores, and manage data based on their roles: normal user, store owner, or admin.

---

Tech Stack:
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- Database: MySQL
- Auth: JWT (JSON Web Tokens)
- Extras: Axios for HTTP, React Router DOM, bcrypt for password hashing

---

Project Structure:
/store-rating/
├── frontend/         # React App
│   ├── src/
│   └── package.json
├── backend/          # Express API
│   ├── config/       # DB config
│   ├── controllers/
│   ├── middleware/
│   ├── models/       # init.sql lives here
│   ├── routes/       # auth, store, owner routes
│   ├── index.js
│   └── .env

---

How to Run:

1. Backend Setup:
-----------------
cd backend
npm install

Create a .env file in the backend directory with:
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=store_rating
JWT_SECRET=supersecretkey

Import the SQL schema:
- Open phpMyAdmin (or DBeaver)
- Create a new database named `store_rating`
- Import the `models/init.sql` file

Then run:
npm start

You should see:
Server running on port 5000
MySQL Connected

2. Frontend Setup:
------------------
cd frontend
npm install

Make sure your package.json has this:
"proxy": "http://localhost:5000"

Then run:
npm start

---


Features:
---------
- Auth with JWT
- Role-based access (user, owner, admin)
- Store management for owners
- Users can rate stores
- Admin dashboard (coming soon)

---

Contributions & Feedback:
-------------------------
This is a work-in-progress. Contributions, suggestions, or bug reports are more than welcome.
