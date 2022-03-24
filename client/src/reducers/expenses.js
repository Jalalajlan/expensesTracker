import {
  ADD_SPENDING_PLAN,
  GET_SPENDING_PLANS,
  DELETE_SPENDING_PLAN,
  GET_SPENDING_EXPENSE,
  SPENDING_PLANS_ERROR,
  ADD_SPENDING_EXPENSE,
  DELETE_SPENDING_EXPENSE,
} from "../actions/types";

const initalState = {
  spendingPlans: [],
  spendingPlan: null,
  error: null,
  loading: false,
};

const expensesReducer = (expenses = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SPENDING_PLANS:
      return {
        ...expenses,
        spendingPlans: payload,
        loading: false,
      };

    case ADD_SPENDING_PLAN:
      return {
        ...expenses,
        spendingPlans: [payload, ...expenses.spendingPlans],
        loading: false,
      };

    case DELETE_SPENDING_PLAN:
      return {
        ...expenses,
        spendingPlans: expenses.spendingPlans.filter(
          (expense) => expense._id !== payload
        ),
        loading: false,
      };

    case GET_SPENDING_EXPENSE:
      return {
        ...expenses,
        spendingPlan: payload[0],
        loading: false,
      };

    case ADD_SPENDING_EXPENSE:
      return {
        ...expenses,
        spendingPlan: payload,
        loading: false,
      };

    case DELETE_SPENDING_EXPENSE:
      return {
        ...expenses,
        spendingPlan: expenses.spendingPlan.expenses.filter(
          (expense) => expense._id !== payload
        ),
        loading: false,
      };

    case SPENDING_PLANS_ERROR:
      return {
        ...expenses,
        error: payload,
        loading: true,
      };

    default:
      return expenses;
  }
};

export default expensesReducer;
