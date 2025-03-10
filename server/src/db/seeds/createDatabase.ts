import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const createDatabase = async () => {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  });

  try {
    await client.connect();
    await client.query('CREATE DATABASE resumate');
    console.log('Database created successfully');
  } catch (error) {
    console.error('Error creating database:', error);
  } finally {
    await client.end();
  }
};

