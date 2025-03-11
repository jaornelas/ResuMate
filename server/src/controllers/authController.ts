// Handles user authentication logic
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../db/models/user";

const SECRET_KEY: string = process.env.SECRET_KEY || "your_jwt_secret";

/**
 * Register a new user (without username)
 */
export const registerUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({ email, password: hashedPassword });

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: user.id, email: user.email },
    });

  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * User login
 */
export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Validate password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    return res.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email },
    });

  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

