import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import { BookingPage } from "./pages/booking/booking";
import { Home } from "./pages/Home/home";
import { Bookings } from "./pages/Bookings/Bookings";
import  Dashboard  from "./pages/admin/Dashboard";
import { Jobs } from "./pages/jobs/jobs";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/SignUp.js/SignUp";
import { Application } from "./pages/jobs/apply-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/Admin" element={<Dashboard />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Apply" element={<Application />} />
      </Routes>
    </Router>
  );
}
export default App;
