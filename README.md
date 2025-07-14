# 📰 Personal Blog RESTful API

This is a simple yet powerful RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a personal blog system. It supports full CRUD operations for articles.

---

## 🔗 Live Demo

> _Optional: Add your deployed link here (e.g., Render, Railway, Vercel)_

---

## ⚙️ Features

- ✅ Create, Read, Update, Delete articles
- ✅ Filtering articles by ID
- ✅ Input validation & error handling
- ✅ Built with security middlewares:
  - Helmet
  - XSS-Clean
  - CORS
  - Rate Limiting
  - HPP

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Testing:** Postman
- **Security:** Helmet, XSS-Clean, Rate Limiting, etc.

---

## 📁 Project Structure

├── controllers
│ └── articleController.js
├── models
│ └── articleModel.js
├── routes
│ └── articleRoutes.js
├── config.env
├── .env.example
├── server.js
├── app.js
├── package.json
└── README.md

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/blog-api.git
cd blog-api

2. Install Dependencies

npm install 3. Configure Environment Variables
Create a .env file in the root directory and copy the structure from the .env.example file:

DATABASE=mongodb+srv://<username>:<password>@cluster.mongodb.net/blogDB?retryWrites=true&w=majority
PORT=3000 4. Start the Server

npm start
The server will be running on:

http://localhost:3000
🧪 API Endpoints
Base URL: /api/v1/myblog

📖 Get All Articles

GET /api/v1/myblog/article
🧾 Get a Single Article by ID

GET /api/v1/myblog/article/:id
📝 Create a New Article

POST /api/v1/myblog/article
Request Body:

json

{
"title": "My First Post",
"content": "This is the article content.",
"author": "Sammy Dragone"
}
✏️ Update an Article

PATCH /api/v1/myblog/article/:id
🗑️ Delete an Article

DELETE /api/v1/myblog/article/:id

👤 Author
Gbemiga Oduwole
Backend Developer in Progress 🛠️
📍 Nigeria

⭐️ Show Some Love
If you found this helpful, please star the repository and share it with others.
