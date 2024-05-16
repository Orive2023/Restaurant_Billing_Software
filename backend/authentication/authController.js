const { registerModel } = require("./schema");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  try {
    const { email, password, restaurantName, customerName, mobile } = req.body;

    const user = await registerModel.findOne({ email });
    if (user) {
      res.send("Email Already Exists");
    } else {
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
      );
      const userUniqueName = email
        .replace("@", process.env.UNIQUE_ID)
        .replace(".", "");

      await registerModel.create({
        email,
        password: hashedPassword,
        restaurantName,
        customerName,
        mobile,
        uniqueKey: userUniqueName,
      });
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      restaurantName: user.restaurantName,
      uniqueKey: user.uniqueKey,
      email: user.email,
      mobile: user.mobile,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "6h",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      restaurantName: user.restaurantName,
      uniqueKey: user.uniqueKey,
      email: user.email,
      mobile: user.mobile,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await registerModel.findOne({ email });
    if (!userData) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      userData.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword != password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const accessToken = generateAccessToken(userData);
    const refreshToken = generateRefreshToken(userData);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      Secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ error: "Forbidden" });
        }

        const accessToken = generateAccessToken(user);
        res.status(200).json({ accessToken });
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
