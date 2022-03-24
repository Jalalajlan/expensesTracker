import "./Dashboard.scss";
import Navbar from "./../../component/Navbar/Navbar";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpensesPlans } from "./../../actions/expenses";
import SpendingPlanForm from "./../../component/SpendingPlanForm/SpendingPlanForm";
import SpendingPlanCard from "./../../component/SpendingPlanCard/SpendingPlanCard";

const Dashboard = () => {
  //
  const dispatch = useDispatch();
  const { spendingPlans } = useSelector((state) => state.expenses);
  const [openAddPlanModal, setOpenAddPlanModal] = useState(false);
  const { email } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const userSavedToken = JSON.parse(localStorage.getItem("token"));
    dispatch(getExpensesPlans(userSavedToken));
  }, [dispatch]);

  const closeModalForm = () => {
    setOpenAddPlanModal(!openAddPlanModal);
  };

  return (
    <>
      <Navbar email={email} />
      <div className="expenses-dashboard">
        <div className="expenses-dashboard__add-spending-plan-form">
          <h3>Expenses plans</h3>
          <button onClick={() => closeModalForm()}>
            <span>+</span> Create new plan
          </button>
        </div>
        <div className="spending-cards-flex">
          {spendingPlans.length ? (
            spendingPlans.map((spendingPlan) => (
              <SpendingPlanCard
                key={spendingPlan._id}
                expensesPlan={spendingPlan}
              />
            ))
          ) : (
            <p className="empty-notify-message">
              No Spending plan has been added ... 🙁
            </p>
          )}
        </div>
      </div>
      {openAddPlanModal && <SpendingPlanForm closeModal={closeModalForm} />}
    </>
  );
};

export default Dashboard;
