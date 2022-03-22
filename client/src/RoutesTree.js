import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpendingPlan from "./pages/SpendingPlan/SpendingPlan";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/spendingPlan/:id" element={<SpendingPlan />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>
              <b>Route does not exist in the app</b>
            </p>
          </main>
        }
      />
    </Routes>
  );
};

export default RouteTree;
