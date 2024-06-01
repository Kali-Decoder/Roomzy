import dotenv from 'dotenv';
import { connectDB } from './db.js';
import app from './app.js';

dotenv.config();


const PORT = process.env.PORT || 8000;

// MongoDB connection
connectDB();

process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
