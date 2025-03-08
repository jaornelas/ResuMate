//define api endpoints
import { Router } from "express";
import authRoutes from "./authRoutes";
import resumeRoutes from "./resumeRoutes";

const router = Router();

// Mount the routes
router.use("/auth", authRoutes); // Handles authentication (login, register)
router.use("/resumes", resumeRoutes); // Handles resume-related operations

export default router;
