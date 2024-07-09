import express from "express";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/error.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import roomRouter from "./routes/roomRoute.js";
import expenseRouter from "./routes/expenseRoute.js";
import botRouter from "./routes/botRoutes.js";

const app = express();

const JWT_SECRET = "rakeshjareensnehaahensneerajheskar";

app.post("/api/generate-token", (req, res) => {
  const { id, first_name, last_name, username } = req.body;

  // Create the payload with user info
  const payload = { id, first_name, last_name, username };

  // Generate a JWT token
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

//middleware routes
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(handleError);

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/bot", botRouter);

export default app;
