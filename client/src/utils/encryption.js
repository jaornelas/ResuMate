// npm i crypto-js
import CryptoJS from "crypto-js";

// Load encryption key from .env
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "frontend_placeholder_secret_key";

// Encrypt data before sending to backend
export const encryptData = (text) => {
  try { 
    // Checks if input text exists
    if (!text) throw new Error("No text provided for encryption.");
    // CryptoJS package encrypts with AES encryption standard using inputted text + secret key & converts to string
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
  } catch (error) {
    console.error("Encryption Error:", error.message); // Error handling for debugging
    return null; // Return null if encryption fails
  }
};

// Decrypt data received from the backend
export const decryptData = (cipherText) => {
  try {
    if (!cipherText) throw new Error("No ciphertext provided for decryption.");
    // Variable for storing decrypted text using CryptoJS package to decrypt with AES encryption standard
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    // Converts decrypted data to UTF string format
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) throw new Error("Decryption failed. Possible incorrect key or corrupted data.");
    return decryptedText;
  } catch (error) {
    console.error("Decryption Error:", error.message);
    return null; // Return null if decryption fails
  }
};

// ** Decryption needs a catch block otherwise corrupted input may cause the app to crash **

// API call would have to be encrypted before sending to the backend
// Encryption would have to be integrated with React components

/*

EXAMPLE USAGE BELOW
________________________________________________________________

// ENCRYPTING BEFORE SENDing data TO the BACKEND:

import { encryptData } from "../utils/encryption";

const handleSubmit = async () => {
  const text = "Sensitive Resume Data";
  const encryptedText = encryptData(text);

  if (encryptedText) {
    await fetch("http://localhost:5001/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume: encryptedText }),
    });
  } else {
      console.error("Failed to encrypt resume data.");
  }
};



// DECRYPTING AFTER RECEIVing data FROM the BACKEND:

import { decryptData } from "../utils/encryption";

const fetchResume = async () => {
  const response = await fetch("http://localhost:5001/api/resume");
  const data = await response.json();
    
  const decryptedText = decryptData(data.resume);
  if (decryptedText) {
      console.log("Decrypted Resume:", decryptedText);
  } else {
      console.error("Failed to decrypt resume data.");
  }
};

*/