import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import SpendingDetails from "../../component/Spendings_Details/SpendingDetails";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../../images/delete.svg";
import "./SpendingPlan.scss";
import { useEffect } from "react";
import {
  deleteSpendingExpense,
  getSpendingPlan,
} from "./../../actions/expenses";

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

const SpendingTransactions = ({ transactions, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="transactions-history">
      {transactions.length ? (
        transactions.map((transaction, index) => (
          <div key={index} className="transaction-card">
            <p>{transaction.category}</p>
            <p>{transaction.note}</p>
            <p>RM {transaction.amount}</p>
            <img
              src={DeleteIcon}
              alt="Delete transactio Icon"
              width={"20px"}
              height="20px"
              onClick={() => {
                dispatch(
                  deleteSpendingExpense(
                    id,
                    transaction._id,
                    JSON.parse(localStorage.getItem("token"))
                  )
                );
                window.location.reload();
              }}
            />
          </div>
        ))
      ) : (
        <b>there are not transaction yet ...</b>
      )}
    </div>
  );
};

export default SpendingPlan;
