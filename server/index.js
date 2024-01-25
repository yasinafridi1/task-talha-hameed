import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User from "./db/User.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

mongoose
  .connect(
    // "mongodb+srv://devlynx:devlynx@devlynx-auth.fol6p84.mongodb.net/?retryWrites=true&w=majority"
    process.env.MongoDB_URL
  )

  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(bodyParser.json());
app.use(cors());

// jwt
const secretkey = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const token = bearerHeader.split(" ")[1];
    req.token = token;
    jwt.verify(req.token, secretkey, (err, authData) => {
      if (err) {
        res.json({ message: "Invalid token" });
        console.log("Invalid Token", token);
      } else {
        console.log("abc");
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token not found" });
  }
};

app.post("/api/signup", async (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or phone number already exists" });
    }

    const newUser = new User({ fullName, email, phoneNumber, password });
    await newUser.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  let data = {
    phoneNumber: phoneNumber,
    password: password,
  };

  try {
    const user = await User.findOne({ phoneNumber });
    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ error: "Invalid phone number or password" });
    }
    jwt.sign({ data }, secretkey, { expiresIn: "10000s" }, (err, token) => {
      console.log("token---", token);
      return res.json({ token });
    });
    // console.log("login===>");
    // res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
