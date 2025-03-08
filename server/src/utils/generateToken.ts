//jwt token generator
import jwt from "jsonwebtoken";

/**
 * @param {number} userId 
 * @returns {string} - generated token
 */
const generateToken = (userId: number): string => {
  const SECRET_KEY: string = process.env.SECRET_KEY || "your_jwt_secret";

  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: "1h", 
  });
};

export default generateToken;
