import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import sequelize from './db/config/connection'; // Sequelize DB connection
import routes from './routes'; // Import all routes
import path from 'path';

const app = express();
const PORT: number = Number(process.env.PORT) || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic API status route
app.get('/', (req, res) => {
  res.send('Resume Builder API is running');
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

// Connect to PostgreSQL (Sequelize)
const startServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced with Sequelize');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Sequelize sync error:', err);
  }
};

startServer();
