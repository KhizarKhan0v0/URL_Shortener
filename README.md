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
```text
📦 url-shortener
 ┣ 📂 Controllers
 ┃ ┗ 📜 url.controller.js      # Handles URL logic
 ┣ 📂 Models
 ┃ ┗ 📜 url.js                 # Mongoose schema for URLs
 ┣ 📂 Routes
 ┃ ┣ 📜 pages.routes.js        # Renders views (EJS pages)
 ┃ ┗ 📜 url.routes.js          # API endpoints (shorten, redirect)
 ┣ 📂 views
 ┃ ┣ 📜 admin.ejs              # Admin dashboard
 ┃ ┗ 📜 index.ejs              # Homepage (URL input form)
 ┣ 📜 db.service.js            # MongoDB connection
 ┣ 📜 index.js                 # Main server entry point
 ┣ 📜 package.json             # Project dependencies
 ┣ 📜 package-lock.json        
 ┣ 📜 .env                     # Environment variables

```
---

---

## ⚙️ Setup Instructions
```bash
Run Following Commands
npm install
npm start
```
### 1. Clone the Repository
```bash
git clone https://github.com/KhizarKhan0v0/url-shortener.git
cd url-shortener
```


