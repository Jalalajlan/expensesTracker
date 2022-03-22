import "./Dashboard.scss";
import Navbar from "./../../component/Navbar/Navbar";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpensesPlans } from "./../../actions/expenses";
import SpendingPlanForm from "./../../component/SpendingPlanForm/SpendingPlanForm";
import SpendingPlanCard from "./SpendingPlanCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userExpensesPlans = useSelector((state) => state.expenses);

  const [openAddPlanModal, setOpenAddPlanModal] = useState(false);

  useEffect(() => {
    const userSavedToken = JSON.parse(localStorage.getItem("token"));
    dispatch(getExpensesPlans(userSavedToken));
  }, []);

  const closeModalForm = () => {
    setOpenAddPlanModal(!openAddPlanModal);
  };

  return (
    <>
      <Navbar />
      <div className="expenses-dashboard">
        <div className="expenses-dashboard__add-spending-plan-form">
          <h3>Expenses plans</h3>
          <button onClick={() => closeModalForm()}>
            <span>+</span> Create new plan
          </button>
        </div>
        <div className="spending-cards-flex">
          {userExpensesPlans.length ? (
            userExpensesPlans.map((expensesPlan) => (
              <SpendingPlanCard
                key={expensesPlan._id}
                expensesPlan={expensesPlan}
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
