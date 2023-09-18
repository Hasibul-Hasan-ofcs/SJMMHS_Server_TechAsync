const express = require("express");
const cors = require("cors");
require("dotenv").config();

// initializing express app
const app = express();

// Environment Variables
const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    note: "welcome to the server side of SJMMHS webapp",
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
