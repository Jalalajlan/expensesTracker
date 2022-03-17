import { GET_PLAN, GET_PLAN_FAIL } from "../actions/types";

const expensesReducer = (expenses = [], action) => {
  switch (action.type) {
    case GET_PLAN:
      return action.payload;
    case GET_PLAN_FAIL:
      return { expenses: [], error: action.payload };

    default:
      return expenses;
  }
};

export default expensesReducer;
