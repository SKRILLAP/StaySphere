# 🌍 StaySphere

> **StaySphere** — A global, inclusive travel platform.  
Create, explore, and review vacation listings with full-stack power and a sleek interface.

---

## 🚀 Features

- 🏠 **Listing Management**: Create, update, delete travel stays.
- 🔒 **User Authentication**: Secure login/signup with session support.
- ✍️ **Reviews & Ratings**: Leave feedback and rate stays.
- 📸 **Cloud Image Uploads**: Integrated with **Cloudinary**.
- 💬 **Flash Messaging**: Beautiful user prompts and notifications.
- 🌐 **Dynamic Routing**: RESTful routes with full CRUD control.
- 🎨 **Responsive Frontend**: Styled with custom CSS and EJS templates.
- 🧠 **Clean MVC Architecture**: Scalable and maintainable codebase.

---

## 🛠️ Tech Stack

| Tech              | Role                          |
|-------------------|-------------------------------|
| **Node.js**       | Backend Runtime               |
| **Express.js**    | Web Framework (REST API)      |
| **MongoDB**       | NoSQL Database (Mongoose ODM) |
| **EJS**           | Templating Engine             |
| **Passport.js**   | Authentication                |
| **Multer**        | File Upload Middleware        |
| **Cloudinary**    | Image Hosting/CDN             |
| **connect-mongo** | Session Store                 |
| **Joi**           | Data Validation               |

---

## 📁 Project Structure

StaySphere/
├── controllers/ # Route logic (Listings, Users, Reviews)
├── models/ # Mongoose Schemas
├── routes/ # RESTful API Routes
├── views/ # EJS Templates
├── public/ # Static assets (CSS, JS)
├── utils/ # Error handler, async wrapper
├── middleware.js # Custom middleware
├── cloudConfig.js # Cloudinary config
├── app.js # Main Express app
├── init/ # Seeder scripts
└── README.md


---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/your-username/staysphere.git
cd staysphere

### 2️⃣ Install dependencies

npm install

### 3️⃣ Configure Environment Variables

Create a .env file in the root directory:

ATLASDB_URL=your_mongodb_connection_url
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
SECRET=your_session_secret

### 4️⃣ Run the app

npm start

---

🤝 Contributing

Got ideas or found a bug?
    1. Fork this repo
    2. Create a new branch
    3. Submit a Pull Request

🙌 Acknowledgements
    Inspired by travel platforms like Airbnb
    Uses concepts learned from online full-stack courses
    Express & MongoDB documentation
