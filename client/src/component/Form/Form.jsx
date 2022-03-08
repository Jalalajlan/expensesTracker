import React, { useState } from "react";
import "./form.scss";
import Icon from "../../images/continue.svg";
import Category from "./Category/Category";

import House from "../../images/house.png";
import Car from "../../images/car.png";
import Transportation from "../../images/delivery-truck.png";
import Holiday from "../../images/sunbed.png";
import Food from "../../images/fast-food.png";
import Bills from "../../images/bill.png";
import Travel from "../../images/airplane.png";
import CloseIcon from "../../images/close.svg";

const Form = () => {
  const [isOpen, setIsopen] = useState(false);

  const [categories, setCategories] = useState({
    house: false,
    car: false,
    transportation: false,
    holiday: false,
    food: false,
    bills: false,
    travel: false,
  });

  const handleHouseCat = () => {
    setCategories({ ...categories, house: !categories.house });
  };
  const handleCarCat = () => {
    setCategories({ ...categories, car: !categories.car });
  };
  const handleTransCat = () => {
    setCategories({
      ...categories,
      transportation: !categories.transportation,
    });
  };
  const handleHolidayCat = () => {
    setCategories({ ...categories, holiday: !categories.holiday });
  };
  const handleFoodCat = () => {
    setCategories({ ...categories, food: !categories.food });
  };
  const handleBillsCat = () => {
    setCategories({ ...categories, bills: !categories.bills });
  };
  const handleTravelCat = () => {
    setCategories({ ...categories, travel: !categories.travel });
  };

  const catIcons = [
    {
      name: House,
      des: "House Icon",
      method: handleHouseCat,
      selected: categories.house ? true : false,
    },
    {
      name: Car,
      des: "Car Icon",
      method: handleCarCat,
      selected: categories.car ? true : false,
    },
    {
      name: Transportation,
      des: "Transportation Icon",
      method: handleTransCat,
      selected: categories.transportation ? true : false,
    },
    {
      name: Holiday,
      des: "Holiday Icon",
      method: handleHolidayCat,
      selected: categories.holiday ? true : false,
    },
    {
      name: Food,
      des: "Food Icon",
      method: handleFoodCat,
      selected: categories.food ? true : false,
    },

    {
      name: Bills,
      des: "House Icon",
      method: handleBillsCat,
      selected: categories.bills ? true : false,
    },
    {
      name: Travel,
      des: "Travel Icon",
      method: handleTravelCat,
      selected: categories.travel ? true : false,
    },
  ];

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
