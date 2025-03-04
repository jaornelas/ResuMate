import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;
const SECRET_KEY: string = process.env.SECRET_KEY || 'your_jwt_secret';

// Middleware using Cross-Origin Resource Sharing 
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));

// User Registration
app.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// User Login
app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.status(400).json({ error: 'Invalid credentials' });
    
    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(400).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Resume Builder API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
