import express from 'express';
import cookieParser from 'cookie-parser';
import { handleError } from './middlewares/error.js';
import cors from 'cors';
import userRouter from './routes/userRoute.js'
import roomRouter from './routes/roomRoute.js'


const app = express();

//middleware routes
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(handleError);

// routes
app.use('/api/v1/user',userRouter);
app.use('api/v1/rooms',roomRouter);


export default app;