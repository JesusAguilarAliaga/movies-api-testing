const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index.js");
const errorHandler = require("./utils/errorHandler.js");

dotenv.config();

// Create express app
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false
}));
app.use(cors());
app.use(router);

// routes
app.get("/", (req, res) => {
    return res.send('<p>welcome to express!</p> <a href="https://documenter.getpostman.com/view/31976132/2s9YywfKac" target="_blank">documentation</a>')
})

// Error handler
app.use(errorHandler);

module.exports =  app