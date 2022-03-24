import React, { useState } from "react";
import "./AddSpendingForm.scss";
import Icon from "../../images/continue.svg";
import CloseIcon from "../../images/close.svg";
import { useDispatch } from "react-redux";
import { addSpendingAmount } from "../../actions/expenses";

const AddSpendingForm = ({ spendingPlanId }) => {
  const dispatch = useDispatch();

  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "Food & Drink",
    amount: "",
    note: "",
  });

  const { category, amount, note } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount === "" && note === "") alert("Please enter valid data");
    else
      dispatch(
        addSpendingAmount(
          spendingPlanId,
          formData,
          JSON.parse(localStorage.getItem("token"))
        )
      );
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="Form">
      <button
        className="Form__submitBtn"
        onClick={() => setFormOpen(!formOpen)}
      >
        Add Transaction <img src={Icon} alt="continue Icon" />
      </button>
      {formOpen && (
        <div className="spending-modal">
          <div className="spending-modal-bg">
            <img
              width="27px"
              height="27px"
              src={CloseIcon}
              alt="close modal icon"
              onClick={() => setFormOpen(!formOpen)}
            />
            <form onSubmit={handleSubmit} autoComplete="false">
              <select name="category" value={category} onChange={handleChange}>
                <option value="Food & Drink">Food & Drink</option>
                <option value="Travel">Travel</option>
                <option value="Transportation">Transportation</option>
                <option value="bills">bills</option>
              </select>
              <input
                type="text"
                name="amount"
                value={amount}
                pattern="[0-9]*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: e.currentTarget.validity.valid
                      ? e.target.value
                      : amount,
                  })
                }
                placeholder="Amount"
              />
              <input
                type="text"
                name="note"
                value={note}
                onChange={handleChange}
                placeholder="Note"
              />
              <button type="submit">Add Transaction</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddSpendingForm;
