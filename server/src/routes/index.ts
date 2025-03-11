//define api endpoints
import { Router } from "express";
import authRoutes from "./authRoutes";
import resumeRoutes from "./resumeRoutes";
import aiRoutes from "./aiRoutes";

const router = Router();

// Mount the routes
router.use("/auth", authRoutes); // Handles authentication (login, register)
router.use("/resumes", resumeRoutes); // Handles resume-related operations
router.use("/ai", aiRoutes); //Handles AI routes to generate resume

export default router;
