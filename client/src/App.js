import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Expenses from "./component/Expenses/Expenses";

const App = () => {
  return (
    <>
      <Navbar />
      <Expenses />
    </>
  );
};

export default App;
