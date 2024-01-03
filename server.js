const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

// APP
const app = express();
dotenv.config({ path: "./config/config.env" });

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listeing on ${PORT}`);
});
