import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import PrivateRoutes from "./Pages/PrivateRoutes";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<PrivateRoutes />}>
          {/* we don't see anything about home because we are not logged in */}
            <Route path="" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}
