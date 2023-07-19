import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { BookingPage } from "./pages/booking/booking";
import { Home } from "./pages/Home/home";
import { Bookings } from "./pages/profile/profile";
import { Admin } from "./pages/admin/admin";
import { Jobs } from "./pages/jobs/jobs";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/SignUp.js/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}
export default App;
