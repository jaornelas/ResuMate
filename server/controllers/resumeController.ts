//handles resume logic like saving, deleting, retrieving
import { Request, Response } from "express";
import Resume from "../db/models/Resume"; // Import the Resume model

/**
 * @desc Get all resumes
 * @route GET /api/resumes
 * @access Private (Requires JWT)
 */
export const getResumes = async (req: Request, res: Response) => {
  try {
    const resumes = await Resume.findAll();
    res.json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ error: "Failed to retrieve resumes" });
  }
};

/**
 * @desc Create a new resume
 * @route POST /api/resumes
 * @access Private (Requires JWT)
 */
export const saveResume = async (req: Request, res: Response) => {
  const { name, email, experience } = req.body;
  const userId = req.body.userID; //Get user id from jwt middleware

  if (!name || !email || !experience) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newResume = await Resume.create({ name, email, experience });
    res.status(201).json(newResume);
  } catch (error) {
    console.error("Error saving resume:", error);
    res.status(500).json({ error: "Failed to save resume" });
  }
};

/**
 * @desc Delete a resume (Only the owner can delete)
 * @route DELETE /api/resumes/:id
 * @access Private (Requires JWT)
 */
export const deleteResume = async (req: Request, res: Response) => {
    const { id } = req.params; // Extract resume ID from URL
    const userId = req.body.userId; // Extract user ID from JWT token (set in authMiddleware)
  
    try {
      // Find the resume by ID
      const resume = await Resume.findByPk(id);
  
      // If the resume doesn't exist, return a 404 Not Found error
      if (!resume) {
        return res.status(404).json({ error: "Resume not found" });
      }
  
      // Ensure the resume belongs to the authenticated user
      if (resume.userId !== userId) {
        return res.status(403).json({ error: "You are not authorized to delete this resume" });
      }
  
      // Delete the resume from the database
      await resume.destroy();
  
      // Respond with a 204 No Content status (successful deletion, no response body)
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting resume:", error);
      res.status(500).json({ error: "Failed to delete resume" });
    }
  };
  
