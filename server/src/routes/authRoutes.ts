import {Router} from "express";
import { registerUser, loginUser } from "../controllers/authController"; // Import controller functions

const router = Router();

// Authentication routes
router.post("/register", registerUser); // User Registration
router.post("/login", loginUser); // User Login

export default router;
