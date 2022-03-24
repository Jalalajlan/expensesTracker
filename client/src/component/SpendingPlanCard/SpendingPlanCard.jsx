import moment from "moment";
import { Link } from "react-router-dom";
import AddIcon from "../../images/add.svg";
import DeleteIcon from "../../images/delete.svg";
import { React } from "react";
import { useDispatch } from "react-redux";
import { deleteSpendingPlan } from "../../actions/expenses";

const SpendingPlanCard = ({ expensesPlan }) => {
  const dispatch = useDispatch();
  const { _id, planName, createdAt, expenses, budget } = expensesPlan;

  const spendingAmountValues = expenses.map((spending) => spending.amount);
  const sumOfSpendingAmount = spendingAmountValues.reduce(
    (total, amount) => total + amount,
    0
  );

  return (
    <div className="spending-plan-card">
      <div className="spending-plan-card__delAndAddoptions">
        <h3>○ {planName}</h3>
        <div>
          <Link to={`/spendingPlan/${_id}`}>
            <img src={AddIcon} alt="close Icon" />
          </Link>
          <img
            src={DeleteIcon}
            alt="Add expenses Icon"
            onClick={() =>
              dispatch(
                deleteSpendingPlan(
                  _id,
                  JSON.parse(localStorage.getItem("token"))
                )
              )
            }
          />
        </div>
      </div>

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

export default SpendingPlanCard;
