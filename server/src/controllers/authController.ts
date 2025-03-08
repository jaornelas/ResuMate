//handles user authentication logic
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../db/models/user";

const SECRET_KEY: string = process.env.SECRET_KEY || "your_jwt_secret";

/**
 * Register a new user (without username)
 */
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email: email, password: hashedPassword });

    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret');

    res.status(200).json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

/**
 * User login
 */
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};
