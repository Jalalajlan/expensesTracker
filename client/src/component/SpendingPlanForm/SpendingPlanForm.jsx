import { useState } from "react";
import "./spendingplanform.scss";
import CloseIcon from "../../images/close.svg";

const SpendingPlanForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    planName: "",
    budget: "",
  });

  const { planName, budget } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="spending-plan-form-modal">
      <div className="spending-plan-form-modal__background">
        <img
          src={CloseIcon}
          alt="close modal icon"
          onClick={() => closeModal()}
        />
        <form onSubmit={handleSubmit} autoComplete={false}>
          <p>Add new spending plan</p>
          <input
            type="text"
            name="planName"
            value={planName}
            placeholder="new spending plan name ..."
            onChange={onChange}
          />
          <input
            type="text"
            name="budget"
            value={budget}
            placeholder="spending plane budegt 200RM ..."
            onChange={onChange}
          />
          <button type="submit">Add spending plan</button>
        </form>
      </div>
    </div>
  );
};

export default SpendingPlanForm;
