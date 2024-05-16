const mongoose = require("../mongooseConfig");

let registerSchema = new mongoose.Schema({
  uniqueKey: String,
  customerName: String,
  restaurantName: String,
  password: String,
  mobile: String,
  email: String,
});

// let mpinSchema = new mongoose.Schema({
//   mpin: String,
// });

const registerModel = mongoose.model("register", registerSchema);
// const mpinModel = mongoose.model("mpin", mpinSchema);

module.exports = { registerModel };
