import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Registration from "./Registration";

const NavigatePage1 = () => {
  // Helper function to check token
  const isAuthenticated = () => !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Redirect logged-in users away from login/register */}
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Registration />}
        />

        {/* Protect Dashboard route */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Default route */}
        <Route
          path="*"
          element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/register" />}
        />
      </Routes>
    </Router>
  );
};

export default NavigatePage1;
