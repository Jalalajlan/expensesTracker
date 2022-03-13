import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import ExpensesRoutes from "./routes/expensesRoute.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/expenses", ExpensesRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
