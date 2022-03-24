import mongoose from "mongoose";

const expensesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    planName: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    expenses: [
      {
        amount: Number,
        category: String,
        note: String,
        createdAt: {
          type: Date,
          default: () => new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Expenses = mongoose.model("Expenses", expensesSchema);

export default Expenses;
