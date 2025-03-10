// npm i crypto-js
import CryptoJS from "crypto-js";

// Load encryption key from .env
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "frontend_placeholder_secret_key";

// Encrypt data before sending to backend
export const encryptData = (text) => {
    // CryptoJS package encryptes using AES encryption, with text to be encrypted & secret key
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

// Decrypt data received from the backend
export const decryptData = (cipherText) => {
    // Stores decryption logic for AES in a variable, with cipherText & secret key
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    // Attaches variable to convert to string in plain text
    return bytes.toString(CryptoJS.enc.Utf8);
};

// API call would have to be encrypted before sending to the backend
// Encryption would have to be integrated with React components