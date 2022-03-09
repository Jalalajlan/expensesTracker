import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import ExpensesRoutes from "./routes/expenses.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/expenses", ExpensesRoutes);

const CONNETION_URL =
  "mongodb+srv://jalalajlan:290310@cluster0.mitby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNETION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
