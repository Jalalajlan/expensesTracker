import { combineReducers } from "redux";

import userReducer from "./user";
import expensesReducer from "./expenses";

export default combineReducers({
  user: userReducer,
  expenses: expensesReducer,
});
