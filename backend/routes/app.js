const app = require("../server");

const {
  register,
  login,
  refreshToken,
} = require("../authentication/authController");

app.post("/api/auth/register", register);
app.post("/api/auth/login", login);
app.post("/api/auth/refresh-token", refreshToken);

module.exports = app;
