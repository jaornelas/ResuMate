//insert JWT Middleware
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY: string = process.env.SECRET_KEY || "your_jwt_secret";

// verify token
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // get token from auth header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // extract token

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { userId: number };
    req.body.userId = decoded.userId; // attach user id
    next();
  } catch (error) {
    return res.status(403).json({ error: "Forbidden: Invalid token" });
  }
};

export default authMiddleware;
