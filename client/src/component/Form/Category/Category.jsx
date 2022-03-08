import React from "react";
import "./category.scss";

const Category = ({ imgSrc, desc, handleChange, selected }) => {
  return (
    <div
      className={selected ? "category active" : "category"}
      onClick={() => {
        handleChange();
      }}
    >
      <img width="30px" height="30px" src={imgSrc} alt={desc} />
    </div>
  );
};

export default Category;
