import Expense from "../models/expense.js";

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getExpenses;
