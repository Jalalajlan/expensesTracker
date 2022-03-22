import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import SpendingDetails from "../../component/Spendings_Details/SpendingDetails";
import { useSelector } from "react-redux";
import DeleteIcon from "../../images/delete.svg";
import "./SpendingPlan.scss";

const SpendingPlan = () => {
  const { id } = useParams();
  const spendingPlan = useSelector(
    (state) => state.expenses.filter((plan) => plan._id === id)[0]
  );
  const { budget, expenses } = spendingPlan;
  const spendingAmountValues = expenses.map((spending) => spending.amount);
  const sumOfSpendingAmounts = spendingAmountValues.reduce(
    (total, amount) => total + amount,
    0
  );

  return (
    <>
      <Navbar />
      <SpendingDetails
        budget={budget}
        totalSpendings={sumOfSpendingAmounts}
        balance={budget - sumOfSpendingAmounts}
      />
      <b>Transaction History</b>
      <SpendingTransactions transactions={expenses} />
    </>
  );
};

const SpendingTransactions = ({ transactions }) => {
  return transactions.length !== 0 ? (
    transactions.map((transaction, index) => (
      <div key={index} className="transactions-history">
        <div className="transaction-card">
          <p>{transaction.category}</p>
          <p>{transaction.note}</p>
          <p>RM {transaction.amount}</p>
          <img
            src={DeleteIcon}
            alt="Delete transactio Icon"
            width={"20px"}
            height="20px"
          />
        </div>
      </div>
    ))
  ) : (
    <b>there are not transactions yet</b>
  );
};

export default SpendingPlan;
