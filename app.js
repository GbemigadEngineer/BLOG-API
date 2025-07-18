const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Importing local modules
const articleRouter = require("./routes/articleRoutes.js");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to my blog API",
  });
});

// Middlewares
// Middleware to parse JSON bodies// This is necessary to handle JSON requests
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for logging requests
app.use(morgan("dev"));

// Security middleware

// Middleware to set security headers
app.use(helmet());


// Middleware to enable CORS
app.use(cors());


// Router middleware
app.use("/api/v1/myblog", articleRouter);

// Exports
module.exports = app;
