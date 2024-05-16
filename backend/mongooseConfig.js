const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONDODB_URL)
  .then(() => console.log("Connected Database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
