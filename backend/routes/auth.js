import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = express.Router();

// register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
});
export default router;

// login

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  !user && res.status(401).json("wrong crendentials");

  const hashedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.SECRET
  );

  const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  req.body.password !== originalPassword &&
    res.status(401).json("wrong credentials");

  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );

  const { password, ...others } = user._doc;
  res.status(200).json({ others, accessToken });
});
