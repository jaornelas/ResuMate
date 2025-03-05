import express from 'express';
import Resume from '../db/models/resume';
import authMiddleware from '../middleware/authMiddleware'; // Protect routes
import { Request, Response } from 'express';

const router = express.Router();

// Get all resumes 
router.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const resumes = await Resume.findAll();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching resumes' });
  }
});

// Create a new resume 
router.post('/', authMiddleware, async (req: Request, res: Response) => {
  const { userId, content } = req.body;
  try {
    const newResume = await Resume.create({ userId, content });
    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ error: 'Error saving resume' });
  }
});

// Delete a resume 
router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const resume = await Resume.findByPk(id);
    if (!resume) return res.status(404).json({ error: 'Resume not found' });

    await resume.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting resume' });
  }
});

export default router;
