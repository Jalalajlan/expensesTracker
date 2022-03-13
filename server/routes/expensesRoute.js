import express from "express";
import {
  createPlan,
  updatePlan,
  deletePlan,
  getPlans,
  deleteExpense,
} from "../controllers/expenseController.js";
import protect from "./../middleware/authmiddleware.js";

const router = express.Router();

router.get("/", protect, getPlans);
router.post("/", protect, createPlan);
router.patch("/:id", protect, updatePlan);
router.patch("/:id/expenses/:id2", protect, deleteExpense);
router.delete("/:id", protect, deletePlan);

export default router;
