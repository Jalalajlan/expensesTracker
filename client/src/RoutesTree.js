import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import SpendingsTrack from "./pages/spendingsTrack/SpendingsTrack";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/spendingPlan/:id" element={<SpendingsTrack />} />
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
