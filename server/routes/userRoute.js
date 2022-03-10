import express from "express";
import userController from "./../controllers/userController.js";
import protect from "./../middleware/authmiddleware.js";

const userRoutes = express.Router();

const { registerUser, loginUser, getUser } = userController;

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/", protect, getUser);

export default userRoutes;
