import crypto from "crypto"; // Already built into Node.js
import dotenv from "dotenv";

// IMPORTANT! CHANGE "SECRET_KEY" here and in .env
// Keep this different from JWT secret key

// Load the environment variables in accordance with dotenv
dotenv.config();

// Declarations to be used
const algorithm = "aes-256-ctr"; // AES-256 (Encryption type) "Counter Mode (CTR)"
const SECRET_KEY = process.env.SECRET_KEY || crypto.randomBytes(32).toString("hex"); // Generates a random key if one is not found in .env

// Encrypt Function
export const encrypt = (text: string): string => {
  const IV = crypto.randomBytes(16); // "Initialization Vector" Ensures random conversions of non-encrypted data. Adds "randomization" to the encryption process
  // Syntax: crypto.createCipheriv(algorithm, key, iv) 
  // - Creates and returns a Cipher object
  // Buffer.from converts the string to hexadecimal format for use in crypto
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(SECRET_KEY, "hex"), IV);
  // Encrypt the text and return the IV prepended to the encrypted text
  return IV.toString("hex") + ":" + cipher.update(text, "utf-8", "hex") + cipher.final("hex");
};

// Decrypt Function
export const decrypt = (encryptedText: string): string => {
  try {
    // Removes randomness (IV) from encrypted text to decrypt
    const [iv, encrypted] = encryptedText.split(":");
    // Create a decipher object using the algorithm, secret key, and IV
    // Syntax: crypto.createDecipheriv(algorithm, key, iv)
    // Buffer.from converts the string to hexadecimal format for use in crypto
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(SECRET_KEY, "hex"), Buffer.from(iv, "hex"));
    // Decrypt the text and return as plaintext
    return decipher.update(encrypted, "hex", "utf-8") + decipher.final("utf-8");
  } catch (error) {
    console.error("Decryption failed:", error);
    return ""; // Handles errors by returning an empty string
  }
};

// Added try & catch blocks as corrupted decryption can cause the server to crash

/*

Example Use:

import { encrypt, decrypt } from "./encryption";

const notEncrypted = "Hello, world!";
const encryptedText = encrypt(notEncrypted);
console.log("Encrypted:", encryptedText);

const decryptedText = decrypt(encryptedText);
console.log("Decrypted:", decryptedText);

*/