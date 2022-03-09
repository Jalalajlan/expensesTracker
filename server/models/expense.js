import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
