import express from "express";
import {
  createPlan,
  updatePlan,
  deletePlan,
  getPlans,
  deleteExpense,
  getSpendingPlan,
} from "../controllers/expenseController.js";
import protect from "./../middleware/authmiddleware.js";

const router = express.Router();

router.get("/:id", protect, getSpendingPlan);
router.get("/", protect, getPlans);
router.post("/", protect, createPlan);
router.delete("/:id", protect, deletePlan);

router.patch("/:id", protect, updatePlan);
router.delete("/:id/expenses/:id2", protect, deleteExpense);

export default router;
