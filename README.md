#  StaySphere

> **StaySphere** — A global, inclusive travel platform.  
Create, explore, and review vacation listings with full-stack power and a sleek interface.

---

##  Features

-  **Listing Management**: Create, update, delete travel stays.
-  **User Authentication**: Secure login/signup with session support.
-  **Reviews & Ratings**: Leave feedback and rate stays.
-  **Cloud Image Uploads**: Integrated with **Cloudinary**.
-  **Flash Messaging**: Beautiful user prompts and notifications.
-  **Dynamic Routing**: RESTful routes with full CRUD control.
-  **Responsive Frontend**: Styled with custom CSS and EJS templates.
-  **Clean MVC Architecture**: Scalable and maintainable codebase.

---

##  Tech Stack

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

##  Project Structure

```bash
StaySphere/
├── app.js                  # Main Express app setup
├── cloudConfig.js          # Cloudinary configuration
├── middleware.js           # Custom middleware for auth & validation
├── schema.js               # Joi validation schemas
├── .env                    # Environment variables (not committed)
│
├── controllers/            # Route logic (controllers)
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/                 # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/                 # Route definitions
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/                  # Utility files
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── init/                   # Database seeding
│   ├── data.js
│   └── index.js
│
├── public/                 # Static assets
│   ├── css/
│   └── js/
│
├── views/                  # EJS templates
│   ├── includes/           # Reusable partials (nav, flash, footer)
│   ├── layouts/            # Base layout using ejs-mate
│   ├── listings/           # Listing views (index, show, edit, new)
│   ├── users/              # Auth views (signup, login)
│   ├── error.ejs
│   └── home.ejs
│
└── README.md               # Project documentation

```


##  Setup Instructions

###  Clone the repository

```bash
git clone https://github.com/SKRILLAP/StaySphere.git
cd StaySphere
```

###  Install dependencies

```bash
npm install --legacy-peer-deps
```

###  Configure Environment Variables

Create a .env file in the root directory:

```bash
ATLASDB_URL=your_mongodb_connection_url
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
SECRET=your_session_secret
```

###  Run the app

Run the app
```bash
nodemon app.js
```

Install nodemon if unable to run the command :)
```bash
npm install -g nodemon
```
---

##  Contributing

Got ideas or found a bug?
1. Fork this repo.
2. Create a new branch.
3. Submit a Pull Request.

##  Acknowledgements

- Inspired by travel platforms like Airbnb.
- Uses concepts learned from online full-stack courses.
- Express & MongoDB documentation.

---

##  Live Demo
https://staysphere-bsd6.onrender.com/
