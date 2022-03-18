import Expenses from "./../models/expense.js";

// @desc   Create user plan
// @route  POST http://localhost:5000/expenses/
// @access protected

export const createPlan = async (req, res) => {
  try {
    if (!req.body.planName) {
      res.status(400).json({
        message: "Plan Name is required",
      });
    }
    const plan = await Expenses.create({
      user: req.user.id,
      planName: req.body.planName,
      budget: req.body.budget,
    });

    if (plan) res.status(200).json(plan);
  } catch (error) {
    res.status(404).json({ message: "unexpeted error" });
  }
};

// @desc   update user plan
// @route  PATCH http://localhost:5000/expenses/:id
// @access protected

export const updatePlan = async (req, res) => {
  try {
    const plan = await Expenses.findById(req.params.id);

    if (!plan) res.status(400).json("plan does not exist");

    if (plan.user.toString() !== req.user.id)
      res.status(400).json("user is not authorized");

    const updatedExp = await Expenses.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: { expenses: req.body },
      },
      {
        new: true,
      }
    );

    if (updatedExp) res.status(200).json(updatedExp);
  } catch (error) {
    res.status(400).json("failed request");
  }
};

// @desc   Delete user plan expenses
// @route  PATCH http://localhost:5000/expenses/:id/expenses/:id
// @access protected

export const deleteExpense = async (req, res) => {
  try {
    const plan = await Expenses.findById(req.params.id);

    if (!plan) res.status(400).json("plan does not exist");

    if (plan.user.toString() !== req.user.id)
      res.status(400).json("user is not authorized");

    const updateExpenses = await Expenses.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $pull: { expenses: { _id: req.params.id2 } },
      },
      { safe: true, multi: false }
    );
    if (updateExpenses) res.status(200).json(updateExpenses);
  } catch (error) {
    console.log(error);
  }
};

// @desc   Delete user plan
// @route  DELETE http://localhost:5000/expenses/:id
// @access protected

export const deletePlan = async (req, res) => {
  try {
    const plan = await Expenses.findById(req.params.id);
    console.log(plan);

    if (!plan) res.status(400).json("plan does not exist");

    if (plan.user.toString() !== req.user.id)
      res.status(400).json("user is not authorized");

    const deletedPlan = await Expenses.findByIdAndDelete({
      _id: req.params.id,
    });

    if (deletedPlan) res.status(200).json(deletedPlan);
  } catch (error) {
    console.log(error);
  }
};

// @desc   Get user plans
// @route  GET http://localhost:5000/expenses/
// @access protected

export const getPlans = async (req, res) => {
  try {
    const plans = await Expenses.find({
      user: req.user.id,
    });

    if (plans) res.status(200).json(plans);
  } catch (error) {
    console.log(error);
  }
};
