import moment from "moment";
import { Link } from "react-router-dom";

const SpendingPlan = ({ expensesPlan }) => {
  const { _id, planName, createdAt, expenses, budget } = expensesPlan;

  const spendingAmountValues = expenses.map((spending) => spending.amount);
  const sumOfSpendingAmount = spendingAmountValues.reduce(
    (total, amount) => total + amount,
    0
  );

  return (
    <div className="spending-plan-card">
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/spendingPlan/${_id}`}
      >
        <h3>○ {planName}</h3>
      </Link>

      <div className="spending-plan-card__dateCreated">
        <p>Date created</p>
        <span>{moment(createdAt).format("MMMM Do YYYY ha")}</span>
      </div>
      <div className="spending-plan-card__spendingsSummary">
        <div>
          <p>Total</p>
          <span>{sumOfSpendingAmount}RM</span>
        </div>
        <div>
          <p>Amount</p>
          <span>{budget}RM</span>
        </div>
      </div>
    </div>
  );
};

export default SpendingPlan;
