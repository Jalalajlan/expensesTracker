import { GET_SPENDING_PLANS, GET_SPENDING_PLANS_FAIL } from "../actions/types";

const expensesReducer = (expenses = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SPENDING_PLANS:
      return payload;
    case GET_SPENDING_PLANS_FAIL:
      return { ...expenses, error: payload };
    default:
      return expenses;
  }
};

export default expensesReducer;
