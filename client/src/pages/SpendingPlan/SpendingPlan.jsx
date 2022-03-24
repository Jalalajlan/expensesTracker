import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import SpendingDetails from "../../component/Spendings_Details/SpendingDetails";
import { useDispatch, useSelector } from "react-redux";
import "./SpendingPlan.scss";
import { useEffect } from "react";
import SpendingTransactions from "./../../component/SpendingTransaction/SpendingTransaction";

import { getSpendingPlan } from "./../../actions/expenses";

const SpendingPlan = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { email, token } = JSON.parse(localStorage.getItem("user"));

  const selectExpenses = (state) => state.expenses;
  const { spendingPlan } = useSelector(selectExpenses);
  let budgetTemp = 0,
    expensesTemp = [];

  if (spendingPlan) {
    const { budget, expenses } = spendingPlan;
    budgetTemp = budget;
    expensesTemp = expenses;
  }

  const spendingAmountValues = expensesTemp.map((spending) => spending.amount);
  const sumOfSpendingAmounts = spendingAmountValues.reduce(
    (total, amount) => total + amount,
    0
  );

  useEffect(() => {
    dispatch(getSpendingPlan(id, token));
  }, [dispatch]);

  return (
    <>
      <Navbar email={email} />
      <SpendingDetails
        budget={budgetTemp}
        totalSpendings={sumOfSpendingAmounts}
        balance={budgetTemp - sumOfSpendingAmounts}
        id={id}
      />
      <b>Transaction History</b>
      <SpendingTransactions id={id} transactions={expensesTemp} />
    </>
  );
};

export default SpendingPlan;
