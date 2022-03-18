import "./dashboard.scss";
import Navbar from "./../../component/Navbar/Navbar";
import SpendingPlan from "./SpendingPlanCard";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpensesPlans } from "./../../actions/expenses";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userExpensesPlans = useSelector((state) => state.expenses);

  useEffect(() => {
    const userSavedToken = JSON.parse(localStorage.getItem("token"));
    dispatch(getExpensesPlans(userSavedToken));
  }, []);

  return (
    <>
      <Navbar />
      <div className="expenses-dashboard">
        <div className="expenses-dashboard__add-spending-plan-form">
          <h3>Expenses plans</h3>
          <button>
            <span>+</span> Create new plan
          </button>
        </div>
        <div className="spending-card-flex">
          {userExpensesPlans.length ? (
            userExpensesPlans.map((expensesPlan) => (
              <SpendingPlan
                key={expensesPlan._id}
                expensesPlan={expensesPlan}
              />
            ))
          ) : (
            <p>no expenses</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
