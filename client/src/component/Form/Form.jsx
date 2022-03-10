import React, { useState } from "react";
import "./form.scss";
import Icon from "../../images/continue.svg";
import Category from "./Category/Category";

import CloseIcon from "../../images/close.svg";
import useArray from "./useArray";

const Form = () => {
  const [isOpen, setIsopen] = useState(false);
  const { catIcons } = useArray();

  return (
    <div className="Form">
      <p>
        Select categories relate to your expense. Click Add Transaction to
        contiue 😊
      </p>
      <div className="Form__catIcons">
        {catIcons.map((cat, index) => (
          <Category
            key={index}
            imgSrc={cat.name}
            desc={cat.des}
            handleChange={cat.method}
            selected={cat.selected}
          />
        ))}
      </div>
      <button className="Form__submitBtn" onClick={() => setIsopen(!isOpen)}>
        Add Transaction <img src={Icon} alt="continue Icon" />
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-bg">
            <img
              width="27px"
              height="27px"
              src={CloseIcon}
              alt="close modal icon"
              onClick={() => setIsopen(!isOpen)}
            />
            <p className="field-headline">category :</p>
            <div className="Form__catIcons">
              {catIcons.map((cat, index) => (
                <Category
                  key={index}
                  imgSrc={cat.name}
                  desc={cat.des}
                  handleChange={cat.method}
                  selected={cat.selected}
                />
              ))}
            </div>
            <input
              type="date"
              name="date"
              className="userInput"
              placeholder="Date"
            />
            <input type="text" className="userInput" placeholder="Amount" />
            <input type="text" className="userInput" placeholder="Note" />
            <button className="Form__submitBtn full-width">
              Add Transaction <img src={Icon} alt="continue Icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
