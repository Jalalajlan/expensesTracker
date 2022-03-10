import React from "react";
import "./expenses.scss";
import Form from "../Form/Form";
import BudgetIcon from "../../images/budget.svg";
import TotalIcon from "../../images/totalExpenses.svg";
import RemainIcon from "../../images/remain.svg";

const Expenses = () => {
  return (
    <div className="expenses">
      <div className="expenses__dashboard">
        <div className="expenses__dashboard__summary">
          <div className="budget-summary">
            <img src={BudgetIcon} alt="Budegt Icon" />
            <div>
              <span>BUDEGT</span>
              <p>400$</p>
            </div>
          </div>
          <div className="expenses-summary">
            <img src={TotalIcon} alt="expenses Icon" />
            <div>
              <span>expenses</span>
              <p>200$</p>
            </div>
          </div>
          <div className="remain-summary">
            <img src={RemainIcon} alt="Budget Remain Icon" />
            <div>
              <span>ٌRemain</span>
              <p>200$</p>
            </div>
          </div>
        </div>
        <div className="expenses__dashboard__bar-chart">
          70% of budget spend
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Expenses;
