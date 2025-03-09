import express from "express";
import Resume from "../db/models/resume";
import authMiddleware from "../middleware/authMiddleware"; // Protect routes
import { Request, Response } from "express";
import { deleteResume, getResumes, saveResume } from "../controllers/resumeController";

const router = express.Router();

// Get all resumes 
router.get("/", authMiddleware, getResumes);

// Create a new resume 
router.post("/", authMiddleware, saveResume);

// Delete a resume 
router.delete("/:id", authMiddleware, deleteResume);

export default router;
