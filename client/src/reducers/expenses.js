import {
  ADD_SPENDING_PLAN_FAIL,
  ADD_SPENDING_PLAN,
  GET_SPENDING_PLANS,
  GET_SPENDING_PLANS_FAIL,
  DELETE_SPENDING_PLAN,
  DELETE_SPENDING_PLAN_FAIL,
} from "../actions/types";

const expensesReducer = (expenses = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SPENDING_PLANS:
      return payload;

    case GET_SPENDING_PLANS_FAIL:
      return { ...expenses, error: payload };

    case ADD_SPENDING_PLAN:
      return [...expenses, payload];

    case ADD_SPENDING_PLAN_FAIL:
      return { ...expenses, error: payload };

    case DELETE_SPENDING_PLAN:
      return expenses.filter((expense) => expense._id !== payload);

    case DELETE_SPENDING_PLAN_FAIL:
      return { ...expenses, error: payload };

    default:
      return expenses;
  }
};

export default expensesReducer;
