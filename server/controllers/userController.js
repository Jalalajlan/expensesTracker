import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc   Register new user
// @route  POST /api/user/register
// @access Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name && !email && !password)
      res.status(400).json({ message: "all fields are required" });

    const userFound = await User.findOne({ email });

    if (userFound) {
      res.status(400).json({ message: "email has been used before" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      if (user) res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc   Login new user
// @route  POST /api/users/login
// @access Public
//
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  res.status(200).json(req.user);
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRECT_KEY, { expiresIn: "1d" });
};

const userController = {
  registerUser,
  loginUser,
  getUser,
};

export default userController;
