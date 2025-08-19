# 🔗 URL Shortener

A simple and efficient **URL Shortener** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS** for views.  
It converts long URLs into short and shareable links, while also tracking click counts.

---

## ✨ Features
- Shorten long URLs into clean and manageable links  
- Redirect to the original URL with a single click  
- Track how many times a shortened link is used  
- Admin panel (EJS views) for managing URLs  
- Lightweight and easy to set up  

---

## 📂 Project Structure
📦 url-shortener
┣ 📂 Controllers
┃ ┗ 📜 url.controller.js # Business logic for handling URLs
┣ 📂 Models
┃ ┗ 📜 url.js # Mongoose schema for URLs
┣ 📂 Routes
┃ ┣ 📜 pages.routes.js # Routes for rendering EJS views
┃ ┗ 📜 url.routes.js # Routes for API endpoints (shorten, redirect)
┣ 📂 views
┃ ┣ 📜 admin.ejs # Admin dashboard view
┃ ┗ 📜 index.ejs # Main homepage view
┣ 📜 db.service.js # MongoDB connection
┣ 📜 index.js # Entry point (Express server)
┣ 📜 package.json # Project dependencies
┣ 📜 package-lock.json
┣ 📜 .env # Environment variables
