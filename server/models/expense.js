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
    expenses: [
      {
        amount: Number,
        category: String,
        note: String,
        createdAt: {
          type: Date,
          default: Date().now,
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
