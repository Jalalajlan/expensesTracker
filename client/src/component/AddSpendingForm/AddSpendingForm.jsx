import React, { useState } from "react";
import "./AddSpendingForm.scss";
import Icon from "../../images/continue.svg";
import CloseIcon from "../../images/close.svg";
import { useDispatch } from "react-redux";

const AddSpendingForm = () => {
  const dispatch = useDispatch();

  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    spendingAmount: "",
    spendingNote: "",
  });

  const { date, spendingAmount, spendingNote } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
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
            <p>category :</p>
            <form onSubmit={handleSubmit}>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
                placeholder="Date"
              />
              <input
                type="text"
                name="spendingAmount"
                value={spendingAmount}
                onChange={handleChange}
                placeholder="Amount"
              />
              <input
                type="text"
                name="spendingNote"
                value={spendingNote}
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
