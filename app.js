if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");

// 🟢 Ensure MongoDB URI is set correctly
const dbUrl = process.env.ATLASDB_URL;
if (!dbUrl) {
  console.error("❌ ATLASDB_URL is missing! Add it to Render Environment Variables.");
  process.exit(1); // Exit to prevent deployment with a broken DB connection
}

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Database Connected!"))
  .catch((err) => {
    console.error("❌ Database Connection Error:", err);
    process.exit(1); // Exit if the DB connection fails
  });

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// 🔹 Use MongoDB as session store (prevents memory leaks in production)
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: process.env.SECRET || "fallbacksecret" },
  touchAfter: 24 * 3600, // 1 day
});

store.on("error", (err) => console.error("❌ ERROR in MONGO SESSION STORE:", err));

const sessionOptions = {
  store,
  secret: process.env.SECRET || "fallbacksecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
  },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash Messages Middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Routes
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// 🔴 Catch-All Route for 404 Errors
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

// 🔴 Global Error Handler (Only logs full error stack in development)
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
  res.status(statusCode).render("error.ejs", { err });
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
