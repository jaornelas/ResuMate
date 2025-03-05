import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import sequelize from './config/database'; // Sequelize DB connection
import authRoutes from './routes/authRoutes'; // Auth routes
import resumeRoutes from './routes/resumeRoutes'; // Resume routes

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/resumes', resumeRoutes); // Resume-related routes

// Basic API status route
app.get('/', (req, res) => {
  res.send('Resume Builder API is running');
});

// Connect to PostgreSQL (Sequelize)
sequelize.sync({ alter: true })
  .then(() => console.log('Database synced with Sequelize'))
  .catch(err => console.error('Sequelize sync error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
